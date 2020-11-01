import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { getCompany } from "../services/companyService";
import Button from "@material-ui/core/Button";
import { addStock, getWatchlist } from "../actions/WatchlistActions";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddIcon from "@material-ui/icons/Add";
import { getTransactions } from "../actions/TransactionActions";
import TSPlot from "../components/TSPlot";
import Paper from "@material-ui/core/Paper";
import CompanyInfoCard from "../components/CompanyInfoCard";
import NewsCard from "../components/NewsCard";
import { getCompanyDetails } from "../actions/CompanyActions";
import CorrelationNetworkGraph from "../components/CorrelationNetworkGraph";
import ModelsList from "../components/ModelsList";
import Divider from "@material-ui/core/Divider";
import Snackbar from "@material-ui/core/Snackbar";
import { Box, Link, CardContent, Card } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    overflow: "auto",
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  tickname: {
    fontSize: 20,
    letterSpacing: 6,
    color: "#404040",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1.25),
  },
  chead: {
    fontSize: 40,
    fontWeight: 700,
    color: "#714C9C",
    paddingTop: theme.spacing(1),
    paddingLow: theme.spacing(1),
  },
  sbhead: {
    fontSize: 20,
    fontWeight: 700,
    color: "#714C9C",
    paddingTop: theme.spacing(1),
    paddingLow: theme.spacing(1),
  },
  detail_t: {
    fontSize: 16,
    lineHeight: 1.7,
    paddingTop: theme.spacing(1),
    paddingLow: theme.spacing(1),
  },
  card_h: {
    padding: 10,
    marginTop: 10,
    height: "100%",
  },
  card_t: {
    height: 350,
    marginTop: 10,
    backgroundColor: "#FFF",
  },
});

class StockContainer extends Component {
  static defaultProps = {};
  static propTypes = {};

  state = {
    open: false,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.firstLoadWatchlist) {
      this.props.getWatchlist(this.props.user.id);
    }
    this.props.getTransactions(this.props.ticker);
    this.props.getCompanyDetails(this.props.ticker);
  }

  render() {
    let {
      classes,
      ticker,
      user,
      watchlist,
      loadingWatchlist,
      updatingWatchlist,
      transactions,
      loadingCompanyDetail,
      companyDetails,
    } = this.props;
    let company = getCompany(ticker);

    if (company === null) {
      return (
        <Typography style={{ textAlign: "left" }} variant="h4">
          '{ticker}' is not a supported company!
        </Typography>
      );
    }

    let isStockOnWatchlist = false;
    ticker = ticker.toLowerCase();
    if (
      !loadingWatchlist &&
      watchlist.some((stock) => stock.ticker.toLowerCase() === ticker)
    ) {
      isStockOnWatchlist = true;
    }
    return (
      <Grid container row className={classes.root} padd>
        <Grid xs={10} alignItems="stretch">
          <Typography style={{ textAlign: "left" }} className={classes.chead}>
            {company.name}
          </Typography>
          <Typography
            style={{ textAlign: "left" }}
            className={classes.tickname}
          >
            {company.ticker}
          </Typography>
        </Grid>

        <Grid alignItems="stretch" justify="right" xs={2}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            disabled={isStockOnWatchlist}
            color={"primary"}
            onClick={() => this.props.addStockToWatchlist(user.id, ticker)}
          >
            Add to watchlist
            {updatingWatchlist && <CircularProgress color="secondary" />}
          </Button>
          <Snackbar
            open={this.open}
            autoHideDuration={6000}
            onClose={this.handleClose}
          ></Snackbar>
        </Grid>

        <Grid xs={12}>
          <Divider />
        </Grid>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          xs={8}
        >
          <Typography className={classes.detail_t}>
            {loadingCompanyDetail && <CircularProgress color="secondary" />}

            {!loadingCompanyDetail && (
              <CompanyInfoCard details={companyDetails} />
            )}
          </Typography>
        </Grid>
        <Grid alignItems="stretch" className={classes.card_h} item xs={4}>
          <NewsCard ticker={ticker} industry={company.industry} />
        </Grid>

        <Grid item xs={8} className={classes.card_h}>
          <Paper>
            <TSPlot transactions={transactions} />
          </Paper>
        </Grid>

        <Grid alignItems="stretch" item xs={4} className={classes.card_h}>
          <ModelsList ticker={ticker} />
        </Grid>

        <Grid item xs={8} alignItems={"center"} justify={"center"}>
          <CorrelationNetworkGraph ticker={ticker} />
        </Grid>

        <Grid item xs={4} alignItems={"center"} justify={"center"}>
          <Card className={classes.card_t}>
            <CardContent>
              <Typography
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  paddingBottom: 20,
                  color: "#714C9C",
                }}
              >
                {" "}
                Twitter Link on the topic
              </Typography>
              <Link href="https://twitter.com/i/topics/10026364281?s=20">
                <img
                  width="250px"
                  src="https://abs.twimg.com/responsive-web/client-web/icon-ios.8ea219d5.png"
                />
              </Link>
            </CardContent>
          </Card>
        </Grid>

        {/*<Grid item xs={12} style={{ minHeight: "1000px" }}>*/}
        {/*  <NotebookIframe />*/}
        {/*</Grid>*/}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  loadingWatchlist: state.watchlist.loading,
  loadingTransactions: state.transaction.loading,
  loadingCompanyDetail: state.companyDetails.loading,
  companyDetails: state.companyDetails.details,
  watchlist: state.watchlist.watchlist,
  transactions: state.transaction.transactions,
  firstLoadWatchlist: state.watchlist.firstLoad,
  updatingWatchlist: state.watchlist.updating,
});

const mapDispatchToProps = {
  getWatchlist: (userId) => getWatchlist(userId),
  getTransactions: (ticker) => getTransactions(ticker),
  addStockToWatchlist: (userId, ticker) => addStock(userId, ticker),
  getCompanyDetails: (ticker) => getCompanyDetails(ticker),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(StockContainer));
