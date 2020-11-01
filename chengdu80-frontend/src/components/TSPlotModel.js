import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import predictions from "../data/prediction";
import CircularProgress from "@material-ui/core/CircularProgress";

class TSPlotModel extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    transactions: [],
  };

  render() {
    let transactions = this.props.transactions;
    if (transactions === null || transactions.length === 0) {
      return <CircularProgress color="secondary" />;
    }
    transactions = this.props.transactions;
    transactions.sort((a, b) => (a.date > b.date ? 1 : -1));

    transactions = transactions.slice(-100);

    let predict = predictions.filter(
      (p) => p.date.startsWith("2012/11") || p.date.startsWith("2012/12")
    );
    predict.sort((a, b) => (a.date > b.date ? 1 : -1));

    if (!this.props.unlocked) {
      predict = predict.slice(0, -5);
    }

    const predictionLabels = predict.map((p) => p.date);

    const historicalLabels = transactions.map((p) => p.date);

    // find union
    const labels = [...new Set([...predictionLabels, ...historicalLabels])];
    labels.sort();

    let i = 0;
    let j = 0;

    const predicted = [];
    const historical = [];

    for (let d of labels) {
      if (
        predict[i] !== null &&
        predict[i] !== undefined &&
        predict[i].date === d
      ) {
        predicted.push(parseFloat(predict[i].forecast));
        i += 1;
      } else {
        predicted.push(null);
      }

      if (
        transactions[j] !== null &&
        transactions[j] !== undefined &&
        transactions[j].date === d
      ) {
        historical.push(parseFloat(transactions[j].prc));
        j += 1;
      } else {
        historical.push(null);
      }
    }

    let data = {
      labels: labels,
      datasets: [
        {
          label: "Predicted",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "red",
          borderColor: "red",
          borderWidth: 1,
          data: predicted,
        },
        {
          label: "Historical",
          fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: historical,
        },
      ],
    };

    return (
      <div>
        <Line
          data={data}
          options={{
            title: {
              display: true,
              text: "Model Prediction",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "bottom",
            },
          }}
        />
      </div>
    );
  }
}

export default TSPlotModel;
