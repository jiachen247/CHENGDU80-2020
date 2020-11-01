import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
  avat: {
    width: 50,
    height: 50,
    backgroundColor: "#714C9C",
    borderRadius: 10,
  },
  white_t: {
    padding: "2px",
    color: "#FFF",
    letterSpacing: 1,
    fontSize: 18,
    textAlign: "center",
  },
  sub_t: {
    letterSpacing: 4,
  },
});

class ModelCard extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    num: 0,
    model: {},
  };

  constructor(props) {
    super(props);
    this.state.num = this.props.index;
    this.state.mode = this.props.model;
  }

  render() {
    const { classes, model, index } = this.props;
    return (
      <div style={{ width: "100%" }}>
        <Button
          variant="outlined"
          style={{ margin: "5px", width: "100%" }}
          onClick={() => (window.location = `/model/${model.id}`)}
        >
          <Grid
            container
            direction="col"
            justify="space-evenly"
            alignItems="stretch"
          >
            <Grid item xs={2}>
              <Box
                style={{
                  textAlign: "center",
                  padding: "10px",
                  margin: "5px",
                }}
                className={classes.avat}
              >
                <Typography
                  styles={{ textAlign: "center", padding: "5px" }}
                  className={classes.white_t}
                >
                  #{index + 1}
                </Typography>
              </Box>
            </Grid>
            <Grid
              container
              direction="row"
              xs={10}
              style={{ paddingLeft: "20px" }}
            >
              <Grid item style={{ textAlign: "left" }} xs={12}>
                <Box fontSize={20} fontWeight="fontWeightBold">
                  {model.name}
                </Box>
              </Grid>
              <Grid item style={{ textAlign: "left" }} xs={12}>
                <Box
                  fontSize={16}
                  fontWeight="fontWeightLight"
                  className={classes.sub_t}
                >
                  {model.author} <span>&#183;</span>R<sup>2</sup> ={" "}
                  {model.rsquare}
                </Box>
              </Grid>
            </Grid>

            {/*<Grid container direction="row" xs={2}>*/}
            {/*    <Button variant={"contained"}>View</Button>*/}
            {/*</Grid>*/}
          </Grid>
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(ModelCard);
