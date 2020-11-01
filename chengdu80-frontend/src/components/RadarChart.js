import React from "react";
import PropTypes from "prop-types";
import { Radar } from "react-chartjs-2";
import {
  Box,
  Card,
  Typography,
  colors,
  makeStyles,
  useTheme,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
  },
}));

const RadarChart = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const data = {
    labels: [
      "Max_profit_strat",
      "Stable_model",
      "Propensity",
      "Manufacturing",
      "Speciaized",
    ],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(77,66,155,0.2)",
        borderColor: "rgba(77,66,155,1)",
        pointBackgroundColor: "rgba(77,66,155,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(77,66,155,1)",
        data: [65, 59, 90, 81, 56],
      },
    ],
  };

  const options = {
    animation: true,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
    scale: {
      ticks: {
        suggestedMin: 0,
      },
    },
  };

  return (
    <div>
      <Box height={200} position="relative">
        <Radar data={data} options={options} />
      </Box>
    </div>
  );
};

RadarChart.propTypes = {
  className: PropTypes.string,
};

export default RadarChart;
