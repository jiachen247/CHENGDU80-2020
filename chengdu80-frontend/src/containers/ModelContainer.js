import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import models from "../data/models";
import TSPlotModel from "../components/TSPlotModel";
import { getTransactions } from "../actions/TransactionActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import NotebookIframe from "../components/NotebookIframe";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";

import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import AlertTitle from "@material-ui/lab/AlertTitle";

const styles = (theme) => ({
  divider: {
    margin: theme.spacing(2, 0),
  },
});

class ModelContainer extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let m = models[this.props.modelId];
    if (m !== null && m !== undefined) {
      this.props.getTransactions(m.ticker);
    }
  }

  render() {
    const {
      classes,
      modelId,
      transactions,
      loadingTransactions,
      history,
    } = this.props;

    let model = models[modelId];
    if (model === undefined || model === null) {
      return <div>Unable to find model!</div>;
    }

    if (loadingTransactions) {
      return (
        <div>
          <CircularProgress color="secondary" />
        </div>
      );
    }

    let unlocked = window.location.hash === "#subscribed";
    let lock = unlocked ? null : (
      <Typography color={"secondary"}>
        <LockIcon style={{ textAlign: "left" }} />
        Subscribe to gain access to recent predictions and interpretability
        insights
      </Typography>
    );
    return (
      <Grid container row className={classes.root} padd>
        <Grid xs={10} alignItems="stretch">
          <Typography
            style={{ textAlign: "left" }}
            variant="h3"
            color="primary"
          >
            {model.name}
          </Typography>

          <Typography
            style={{ textAlign: "left" }}
            variant="h5"
            color="default"
          >
            {model.ticker}
          </Typography>
        </Grid>

        {
          <Grid hidden={unlocked} alignItems="stretch" justify="right" xs={2}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              disabled={false}
              color={"primary"}
              onClick={() => history.push("/payment")}
            >
              Subscribe $119.99
            </Button>
          </Grid>
        }

        <Grid xs={12}>
          <Divider />
          {lock}
        </Grid>

        <Grid xs={3}>
          <div style={{ padding: "10px" }}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="caption table">
                <caption>{model.description}</caption>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Box fontWeight="fontWeightBold">{model.name}</Box>
                    </TableCell>
                    <TableCell align="left" />
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key="mid">
                    <TableCell component="th" scope="row">
                      Model ID
                    </TableCell>
                    <TableCell align="left">{model.id}</TableCell>
                  </TableRow>

                  <TableRow key="author">
                    <TableCell component="th" scope="row">
                      Author
                    </TableCell>
                    <TableCell align="left">{model.author}</TableCell>
                  </TableRow>

                  <TableRow key="stock">
                    <TableCell component="th" scope="row">
                      Stock
                    </TableCell>
                    <TableCell align="left">{model.ticker}</TableCell>
                  </TableRow>

                  <TableRow key="r2">
                    <TableCell component="th" scope="row">
                      R<sup>2</sup>
                    </TableCell>
                    <TableCell align="left">{model.rsquare}</TableCell>
                  </TableRow>

                  <TableRow key="uploaded">
                    <TableCell component="th" scope="row">
                      Uploaded on
                    </TableCell>
                    <TableCell align="left">{model.uploaded}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Button
                onClick={() =>
                  (window.location = process.env.PUBLIC_URL + "/ledger.html")
                }
              >
                <Alert severity="success" styles={{ textAlign: "left" }}>
                  <AlertTitle styles={{ textAlign: "left" }}>
                    Verified Model
                  </AlertTitle>
                  <strong>
                    Predictions on the distributed ledger has been verified!
                  </strong>{" "}
                  Click to view the open ledger.
                </Alert>
              </Button>
            </TableContainer>
          </div>
        </Grid>

        <Grid xs={9}>
          <Paper style={{ marginTop: "10px" }}>
            <TSPlotModel unlocked={unlocked} transactions={transactions} />
          </Paper>
        </Grid>

        {unlocked && (
          <Grid xs={12}>
            <Paper>
              <Typography
                style={{
                  padding: "20px",
                  paddingBottom: "0px",
                  textAlign: "left",
                }}
                variant="h5"
                color="default"
              >
                Interpretability
              </Typography>
              <Grid item xs={12}>
                <NotebookIframe
                  height="400px"
                  title={"Price Movement with Time Interactive View"}
                  link={"/display1.html"}
                />
                <List dense={true}>
                  <ListItem>
                    <ListItemText
                      secondary="Observation Count, i.e. Date "
                      primary="Horizontal Axis"
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      secondary="Feature Ranking"
                      primary="Vertical Axis"
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemText
                      primary="Description"
                      secondary="It allows users to view how relative contribution of price influencers on price change across days. ​

​

Users can use the dropdown list on the left to choose which feature they want to investigate"
                    />
                  </ListItem>
                </List>
              </Grid>
              <Divider />

              <Typography
                style={{
                  padding: "5px",
                  paddingBottom: "0px",
                  textAlign: "left",
                  margin: "10px",
                }}
                variant="h6"
                color="default"
              >
                Feature Importance Ranking
              </Typography>

              <Grid container direction={"row"} xs={12}>
                <Grid item xs={3}>
                  <img
                    width={"500px"}
                    src={"/display4.png"}
                    alt={"display 2"}
                  />
                  <div>
                    <Box fontWeight="fontWeightBold">Bar Plot</Box>
                    <List dense={true}>
                      <ListItem>
                        <ListItemText
                          secondary="Population Average SHAP Value "
                          primary="Horizontal Axis"
                        />
                      </ListItem>

                      <ListItem>
                        <ListItemText
                          secondary="Feature Ranking"
                          primary="Vertical Axis"
                        />
                      </ListItem>

                      <ListItem>
                        <ListItemText
                          primary="Description"
                          secondary="It compares the total feature impact on predicted day 0, day 1 and day 2 price."
                        />
                      </ListItem>
                    </List>
                  </div>
                </Grid>

                <Grid item xs={1}></Grid>

                <Grid item xs={3}>
                  <img
                    width={"500px"}
                    src={"/display3.png"}
                    alt={"display 3"}
                  />
                  <Box fontWeight="fontWeightBold">Decision Plot</Box>
                  <List dense={true}>
                    <ListItem>
                      <ListItemText
                        secondary="Price"
                        primary="Horizontal Axis"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemText
                        secondary="Feature Ranking"
                        primary="Vertical Axis"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemText
                        primary="Description"
                        secondary="It shows how model accumulates features’ impact and arrives at prediction step by step."
                      />
                    </ListItem>
                  </List>
                </Grid>

                <Grid item xs={1}></Grid>

                <Grid item xs={3}>
                  <img
                    width={"500px"}
                    src={"/display2.png"}
                    alt={"display 4"}
                  />
                  <Box fontWeight="fontWeightBold">Beeswarm Plot</Box>
                  <List dense={true}>
                    <ListItem>
                      <ListItemText
                        secondary="SHAP Value"
                        primary="Horizontal Axis"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemText
                        secondary="Feature Ranking"
                        primary="Vertical Axis"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemText
                        primary="Description"
                        secondary="It shows how the relative impact of each feature is distributed across observations."
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <Divider></Divider>

              <Typography
                style={{
                  margin: "10px",
                  padding: "5px",
                  paddingBottom: "0px",
                  textAlign: "left",
                }}
                variant="h6"
                color="default"
              >
                Specific Feature View
              </Typography>

              <Grid container direction={"row"} xs={12}>
                <Grid item xs={12}>
                  <img width="500px" src={"/display5.png"} alt={"display 5"} />
                  <Box fontWeight="fontWeightBold">Partial Dependence View</Box>
                  <List dense={true}>
                    <ListItem>
                      <ListItemText
                        secondary="Population Average SHAP Value "
                        primary="Horizontal Axis"
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemText secondary="Price" primary="Vertical Axis" />
                    </ListItem>

                    <ListItem>
                      <ListItemText
                        primary="Description"
                        secondary="It shows how price responds to individual feature in absolute correlations."
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        )}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  loadingTransactions: state.transaction.loading,
  transactions: state.transaction.transactions,
});

const mapDispatchToProps = {
  getTransactions: (ticker) => getTransactions(ticker),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ModelContainer));
