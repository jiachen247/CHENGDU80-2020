import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Box, Grid, Typography } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    overflow: "auto",
  },
  s1: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
    alignItems: "center",
    justify: "center",
    height: 200,
  },
  noactive: {
    paddingTop: theme.spacing(3),
    fontSize: 20,
  },
  instruction: {
    paddingTop: theme.spacing(3),
    fontSize: 20,
  },
});

class StartpageContainer extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    const { classes } = this.props;

    return (
      <Grid>
        <Box className={classes.s1}>
          <Typography className={classes.noactive}>
            You do not have any active stocks on the watchlist yet.
          </Typography>
          <Typography style={{ fontWeight: 700, fontSize: 20, marginTop: 20 }}>
            Instruction:
          </Typography>
          <Typography className={classes.instruction}>
            Kindly proceed to the screening tab for stocks selection.
          </Typography>
        </Box>
        <img width="150" src="/Pisces-black.png" />
      </Grid>
    );
  }
}

export default withStyles(styles)(StartpageContainer);
