import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Box, Button, Grid, Typography } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    overflow: "auto",
  },
  s1: {
    marginBottom: theme.spacing(1.5),
    alignItems: "center",
    justify: "center",
    height: 900,
    backgroundColor: "#594DB3",
  },
  s2: {
    marginBottom: theme.spacing(1.5),
    height: 700,
  },
  s3: {
    height: 300,
    backgroundColor: "#91DAEB",
  },
  l1: {
    paddingTop: theme.spacing(40),
  },
  l2: {
    paddingTop: theme.spacing(20),
  },

  t1: {
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    fontSize: 60,
    fontWeight: 700,
    textAlign: "left",
    alignItems: "left",
    //    backgroundColor: "#594DB3"
  },
  t2: {
    paddingLeft: theme.spacing(5),
    fontSize: 60,
    fontWeight: 700,
    textAlign: "left",
    alignItems: "left",
    //    backgroundColor: "#594DB3"
  },
  t3: {
    marginTop: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    fontSize: 30,
    textAlign: "left",
    alignItems: "left",
  },
  submit: {
    marginTop: theme.spacing(15),
    height: 70,
    width: 200,
    fontSize: 25,
  },
});

class WelcomeContainer extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    const { classes, history } = this.props;

    return (
      <Grid>
        <Box className={classes.s1}>
          <div className={classes.l1}>
            <img width="180" src="/Pisces-Logo-Square.png" />
          </div>
        </Box>
        <Box container className={classes.s2}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid xs={6}>
              <Typography className={classes.t1} styles={{ textAlign: "left" }}>
                {" "}
                Your one Investment
              </Typography>
              <Typography className={classes.t2} styles={{ textAlign: "left" }}>
                {" "}
                Intelligence for
              </Typography>
              <Typography className={classes.t2} styles={{ textAlign: "left" }}>
                {" "}
                your Stock Investment
              </Typography>
            </Grid>

            <Grid xs={6}>
              <img width="600" src="/Pisces-black.png" />
            </Grid>
          </Grid>

          <Typography className={classes.t3} styles={{ lineHeight: "120" }}>
            Technology and innovation are shaping better ways for people to do
            things. None has really brought this impact into the world of
            investing. Not until we created them, the robots. The introduction
            of RoboInvesting in 2017 has created a new quantitative way for
            retail investors to seek profit from the market. However, most of
            investors are very cautious to trust the Artificial Intelligence due
            to the Black-box approach of model for accuracy. Pisces is developed
            exactly to address those concern, as we utilise explainable AI to
            explain those models.
          </Typography>
        </Box>

        <Box container className={classes.s3}>
          <Button
            color="primary"
            variant={"contained"}
            className={classes.submit}
            onClick={() => history.push("/login")}
          >
            Start
          </Button>
        </Box>
      </Grid>
    );
  }
}

export default withStyles(styles)(WelcomeContainer);
