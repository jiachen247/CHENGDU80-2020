import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import latestNews from "../data/latest_news";
import sectors from "../data/sectors";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import LaunchIcon from "@material-ui/icons/Launch";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";

class NewsCard extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    const { industry } = this.props;
    const sector = sectors[industry];
    const latest = latestNews.filter((x) => x.industry === sector);

    return (
      <div>
        <Paper style={{ padding: "20px" }}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                style={{
                  padding: "10px",
                  paddingTop: "0",
                  paddingBottom: "0px",
                  textAlign: "left",
                  fontWeight: 700,
                  color: "#714C9C",
                }}
                variant="h5"
                color="default"
              >
                Industry Latest News
              </Typography>
              <Typography
                style={{
                  paddingLeft: "10px",
                  paddingBottom: "5px",
                  textAlign: "left",
                }}
                color="default"
              >
                {sector}
              </Typography>
              {latest.reverse().map(function (article) {
                let chipColor = "grey";

                if (article.sentiment_score > 0) {
                  chipColor = "PaleGreen";
                }

                if (article.sentiment_score < 0) {
                  chipColor = "salmon";
                }

                return (
                  <Card variant="outlined">
                    <CardContent>
                      <Box
                        fontSize={18}
                        style={{ paddingTop: 10 }}
                        fontWeight="fontWeightMedium"
                      >
                        <Typography
                          style={{ fontWeight: "700", textAlign: "left" }}
                        >
                          {article.title}
                        </Typography>
                      </Box>

                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <Grid item xs={3} style={{ textAlign: "left" }}>
                          <Typography color="#714C9C" style={{ fontSize: 14 }}>
                            {article.date}
                          </Typography>
                        </Grid>

                        <Grid item xs={3}>
                          <Typography
                            style={{ fontSize: 14, textAlign: "right" }}
                          >
                            Sentiment:
                          </Typography>
                        </Grid>

                        <Grid item xs={3} alignItems="left">
                          <Tooltip title="Sentiment score" aria-label="">
                            <Chip
                              style={{
                                backgroundColor: chipColor,
                                fontSize: 12,
                                height: 20,
                              }}
                              label={article.sentiment_score.toString()}
                            />
                          </Tooltip>
                        </Grid>

                        <Grid item xs={3} style={{ textAlign: "right" }}>
                          <Button
                            endIcon={<LaunchIcon />}
                            variant="contained"
                            size="small"
                            onClick={() => (window.location = article.url)}
                          >
                            Read More
                          </Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                );
              })}
            </Grid>

            {/*<Grid item xs={12}>*/}
            {/*  <Typography*/}
            {/*      style={{ padding: "20px", textAlign: "left" }}*/}
            {/*      variant="h5"*/}
            {/*      color="default"*/}
            {/*  >*/}
            {/*    Highlights*/}
            {/*  </Typography>*/}
            {/*</Grid>*/}
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default NewsCard;
