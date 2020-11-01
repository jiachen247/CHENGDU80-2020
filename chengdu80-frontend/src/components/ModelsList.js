import React, { Component } from "react";
import models from "../data/models";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ModelCard from "./ModelCard";

class ModelsList extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    return (
      <div>
        <Paper style={{ padding: "15px" }}>
          <Typography
            style={{
              padding: "15px",
              textAlign: "left",
              color: "#714C9C",
              fontWeight: "700",
            }}
            variant="h5"
          >
            Top Performing Models
          </Typography>
          <Grid
            container
            direction="column"
            justify="space-evenly"
            alignItems="center"
          >
            {Object.values(models).map(function (model, i) {
              return <ModelCard index={i} model={model} />;
            })}
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default ModelsList;
