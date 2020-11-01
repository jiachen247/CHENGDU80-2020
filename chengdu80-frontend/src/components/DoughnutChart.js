import React from "react";
import PropTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";
import {
  Box,
  Typography,
  colors,
  makeStyles,
  useTheme,
  Paper,
} from "@material-ui/core";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import PhoneIcon from "@material-ui/icons/Phone";
import TabletIcon from "@material-ui/icons/Tablet";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
  },
}));

const DoughnutChart = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: [
          colors.deepPurple[600],
          colors.deepPurple[300],
          colors.teal["A200"],
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white,
      },
    ],
    labels: ["Time Sereis Random Forest v1", "TSPC-372", "You-r-0.679"],
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: true,
      position: "bottom",
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
  };

  const devices = [
    {
      title: "Desktop",
      value: 63,
      icon: LaptopMacIcon,
      color: colors.deepPurple[800],
    },
    {
      title: "Tablet",
      value: 15,
      icon: TabletIcon,
      color: colors.deepPurple[400],
    },
    {
      title: "Mobile",
      value: 23,
      icon: PhoneIcon,
      color: colors.teal[600],
    },
  ];

  return (
    <Paper>
      <Box height={200} position="relative">
        <Doughnut data={data} options={options} />
      </Box>
      <Box display="flex" justifyContent="center" mt={2}>
        {devices.map(({ color, icon: Icon, title, value }) => (
          <Box key={title} p={1} textAlign="center">
            <Icon color="action" />
            <Typography color="textPrimary" variant="body1">
              {title}
            </Typography>
            <Typography style={{ color }} variant="h2">
              {value}%
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

DoughnutChart.propTypes = {
  className: PropTypes.string,
};

export default DoughnutChart;
