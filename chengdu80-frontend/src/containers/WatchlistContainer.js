import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getWatchlist, deleteStock } from "../actions/WatchlistActions";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { getCompany } from "../services/companyService";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

const styles = (theme) => ({
  root: {
    overflow: "auto",
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
});

class WatchlistContainer extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  componentDidMount() {
    if (this.props.firstLoad) {
      this.props.getWatchlist(this.props.user.id);
    }
  }

  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    const { classes, user, loading, error, watchlist, history } = this.props;

    if (loading) {
      return (
        <div>
          <CircularProgress />
        </div>
      );
    }

    if (error) {
      return <div>Failed to load watchlist from the backend!</div>;
    }

    return (
      <Grid container className={classes.root} padd spacing={24}>
        <Grid item xs={12}>
          <Typography style={{ textAlign: "left" }} variant="h4">
            Watchlist
          </Typography>
          <Divider className={classes.divider} />
        </Grid>

        <Grid item xs={10}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Box fontWeight="fontWeightBold">Company name</Box>
                  </TableCell>
                  <TableCell align="center">
                    <Box fontWeight="fontWeightBold">Ticker</Box>
                  </TableCell>
                  <TableCell align="center">
                    <Box fontWeight="fontWeightBold">Watching since</Box>
                  </TableCell>
                  <TableCell align="center">
                    <Box fontWeight="fontWeightBold">Actions</Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {watchlist &&
                  watchlist.map((stock) => {
                    let company = getCompany(stock.ticker);
                    if (company === null) {
                      console.log("failed to find " + company);
                      return <TableRow key={company} />;
                    }

                    return (
                      <TableRow key={stock.name}>
                        <TableCell component="th" scope="row">
                          {company.name}
                        </TableCell>
                        <TableCell align="center">{company.ticker}</TableCell>
                        <TableCell align="center">{stock.timestamp}</TableCell>

                        <TableCell align="center">
                          <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="stretch"
                          >
                            <Button
                              variant="contained"
                              color="default"
                              onClick={() =>
                                history.push(`/stock/${company.ticker}`)
                              }
                              style={{ marginRight: "10px" }}
                            >
                              View
                            </Button>

                            <Button
                              variant="contained"
                              color="secondary"
                              size="delete"
                              style={{ marginLeft: "10px" }}
                              onClick={() =>
                                this.props.deletesStock(user.id, company.ticker)
                              }
                            >
                              Delete
                            </Button>
                          </Grid>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.watchlist.loading,
  error: state.watchlist.error,
  watchlist: state.watchlist.watchlist,
  firstLoad: state.watchlist.firstLoad,
});

const mapDispatchToProps = {
  getWatchlist: (userId) => getWatchlist(userId),
  deletesStock: (userId, ticker) => deleteStock(userId, ticker),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(WatchlistContainer));
