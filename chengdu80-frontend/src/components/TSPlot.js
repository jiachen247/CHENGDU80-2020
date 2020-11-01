import { Box, Card, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class TSPlot extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    transactions: [],
  };

  render() {
    let points = this.props.transactions.sort((a, b) =>
      a.date > b.date ? 1 : -1
    );

    let data = {
      labels: points.map((p) => p.date),
      datasets: [
        {
          label: "Historical",
          fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: points.map((p) => p.prc),
        },
      ],
    };

    return (
      <Card>
        <Typography
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#714C9C",
            paddingTop: 30,
          }}
        >
          Historical Price
        </Typography>
        <Box style={{ padding: 20 }}>
          <Line
            data={data}
            options={{
              legend: {
                display: false,
              },
            }}
          />
        </Box>
      </Card>
    );
  }
}

export default TSPlot;
