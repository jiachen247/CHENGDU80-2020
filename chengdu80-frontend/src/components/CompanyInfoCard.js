import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const stats = [
  {
    key: "trailingpe",
    label: "Trailing PE",
  },
  {
    key: "regularmarketvolume",
    label: "Regular Market Vol",
  },
  {
    key: "averagevolume10days",
    label: "Average Volume (10 Days)",
  },
  {
    key: "earningsquarterlygrowth",
    label: "Earnings Quarterly Growth",
  },
  {
    key: "profitmargins",
    label: "Profit Margins",
  },
  {
    key: "payoutratio",
    label: "Payout Ratio",
  },
  {
    key: "marketcap",
    label: "Market Cap",
  },
  {
    key: "bookvalue",
    label: "Book Value",
  },
  {
    key: "dividendrate",
    label: "Dividend Rate",
  },
  {
    key: "pricetobook",
    label: "Price to Book",
  },
  {
    key: "beta",
    label: "Beta",
  },
];

class CompanyInfoCard extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    const { details } = this.props;
    if (details === null || details === undefined) {
      return null;
    }

    let summary = details.longbusinesssummary;

    if (summary.length > 600) {
      summary = summary.slice(0, 600) + "...";
    }
    return (
      <Grid alignItems="stretch" item xs={12}>
        <div style={{ margin: "10px" }}>
          <Paper style={{ padding: "15px" }}>
            <div>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="stretch"
              >
                <Grid alignItems={"left"} xs={6}>
                  <Typography
                    style={{ fontWeight: 700, fontSize: 24, color: "#714C9C" }}
                  >
                    Basic Details
                  </Typography>

                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="stretch"
                    style={{ margin: "10px", lineHeight: 2 }}
                  >
                    <Grid style={{ textAlign: "center" }} xs={6}>
                      <Box fontWeight="fontWeightBold">Country:</Box>
                    </Grid>
                    <Grid style={{ textAlign: "center" }} xs={6}>
                      {details.country}
                    </Grid>

                    <Grid style={{ textAlign: "center" }} xs={6}>
                      <Box fontWeight="fontWeightBold">Industry:</Box>
                    </Grid>
                    <Grid style={{ textAlign: "center" }} xs={6}>
                      {details.industry}
                    </Grid>

                    <Grid style={{ textAlign: "center" }} xs={6}>
                      <Box fontWeight="fontWeightBold">Sector:</Box>
                    </Grid>
                    <Grid style={{ textAlign: "center" }} xs={6}>
                      {details.sector}
                    </Grid>
                  </Grid>

                  <Typography
                    style={{ fontWeight: 700, fontSize: 24, color: "#714C9C" }}
                  >
                    Key Statistics
                  </Typography>

                  <Grid direction="column" alignItems="stretch">
                    {stats.map(function ({ key, label }) {
                      return (
                        <Grid
                          style={{ margin: "10px" }}
                          container
                          direction="row"
                          xs={12}
                        >
                          <Grid style={{ textAlign: "center" }} xs={6}>
                            <Box fontWeight="fontWeightBold">{label}:</Box>
                          </Grid>
                          <Grid style={{ textAlign: "center" }} xs={6}>
                            {details[key]}
                          </Grid>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>

                <Grid item alignItems={"center"} justify={"center"} xs={6}>
                  <img width={"200px"} src={details.logo_url} alt={"logo"} />
                  <Typography
                    style={{
                      fontWeight: 700,
                      fontSize: 24,
                      color: "#714C9C",
                      marginBottom: 15,
                    }}
                  >
                    Business Summary
                  </Typography>
                  <Typography style={{ textAlign: "left" }} variant={"body1"}>
                    {summary}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </div>{" "}
      </Grid>
    );
  }
}

export default CompanyInfoCard;

// {/*<Typography variant={"h5"}>Company Information</Typography>*/}
// {/*<img src={details.logo_url} alt={"logo"}/>*/}
// {/*  <Grid>*/}
// {/*    <Grid xs={6}>*/}
// {/*      <Grid direction={"col"}>*/}
// {/*        <Grid xs={6}>*/}
// {/*          <Typography>key:</Typography>*/}
// {/*        </Grid>*/}
//
// {/*        <Grid xs={6}>*/}
// {/*          <Typography>value</Typography>*/}
// {/*        </Grid>*/}
// {/*      </Grid>*/}
// {/*    </Grid>*/}
//
// {/*    <Grid xs={6}>key: value key: value key: value key: value</Grid>*/}
// {/*  </Grid>*/}
