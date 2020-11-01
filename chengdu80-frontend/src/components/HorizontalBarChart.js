import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { HorizontalBar } from "react-chartjs-2";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles(() => ({
  root: {},
}));

const HorizontalBarChart = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: colors.deepPurple[600],
        data: [80, 75, 59, 77, 69],
        label: "New Model Subscribed",
      },
    ],
    labels: [
      "Max_prof_strat",
      "Stable Model",
      "Propensity",
      "Manufacturing",
      "Specialized",
    ],
  };

  const options = {
    animation: false,
    cornerRadius: 100,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          barThickness: 24,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            display: true,
          },
          gridLines: {
            drawBorder: false,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0,
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
          },
        },
      ],
    },
  };

  return (
    <paper>
      <Box height={200} position="relative">
        <HorizontalBar data={data} options={options} />
      </Box>
    </paper>
  );
};

HorizontalBarChart.propTypes = {
  className: PropTypes.string,
};

export default HorizontalBarChart;
