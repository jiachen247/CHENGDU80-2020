import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import VisNetwork from "../components/VizTest";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import DoughnutChart from "../components/DoughnutChart";
import BarChart from "../components/BarChart";
import HorizontalBarChart from "../components/HorizontalBarChart";
import LatestProducts from "../components/LatestProducts";
import ModelRank from "../components/ModelRank";
import UploadButton from "../components/UploadButton";
import { CardHeader } from "@material-ui/core";
import { ArrowDropUp, ArrowUpward } from "@material-ui/icons";

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  title: {
    fontSize: 36,
    fontWeight: 700,
    color: "#714c9C",
  },
  pos: {
    marginBottom: 12,
  },
  card150_w: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
    height: 150,
    backgroundColor: "#91DAEB",
  },
  card150: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
    height: 150,
  },
  card300: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
    height: 300,
  },
  card300M: {
    marginTop: theme.spacing(1.5),
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(1.5),
    height: 300,
  },
  card600: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
    paddingTop: theme.spacing(1.5),
    height: 565,
  },
  card900: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
    paddingTop: theme.spacing(0.5),
    height: 890,
  },
  exploretext: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: 50,
    color: "#000",
  },
});

class DashboardContainer extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} padd spacing={24}>
        <Grid item xs={12}>
          <Typography style={{ textAlign: "left" }} className={classes.title}>
            Dashboard
          </Typography>
          <Divider className={classes.divider} />
        </Grid>

        <Grid container spacing={6}>
          <Grid item xs={9} direction="column">
            <Grid item>
              <Card className={classes.card600}>
                <BarChart />
              </Card>
            </Grid>
            <Grid container direction="row">
              <Grid xs={4} spacing={2}>
                <Card className={classes.card300}>
                  <CardHeader title="Subscriber Breakdown" />
                  <CardContent>
                    <DoughnutChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={4} spacing={2}>
                <Card className={classes.card300M}>
                  <CardHeader title="Model Rankings" />
                  <CardContent>
                    <ModelRank />
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={4} spacing={2}>
                <Card className={classes.card300}>
                  <CardHeader title="Total Subscribers" />
                  <CardContent>
                    <Typography variant="h1"> 1250</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item justify="center" alignItems="center" xs={3}>
            <Card className={classes.card150_w}>
              <CardHeader title="Wallet" />
              <Typography className={classes.exploretext}>$14,545</Typography>
            </Card>
            <Card className={classes.card150}>
              <CardHeader title="Upload New Models" />
              <UploadButton />
            </Card>
            <Card className={classes.card600}>
              <LatestProducts />
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ height: 70 }}
        >
          <img width="125px" src="/Pisces-black.png" />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(DashboardContainer);
