const models = {
  1001: {
    id: 1001,
    name: "Time Series Random Forest v1",
    author: "Kenny",
    description:
      "A random forest tree regression model trained on lag-3 days closing price, industry news sentiment score distributions, and financial indicators. Harnessing the power of natural language processing for news article topic modelling, and sentiment analysis.",
    rsquare: 0.71,
    ticker: "AAPL",
    uploaded: "01/10/2012",
    rating: 4,
  },
  1002: {
    id: 1002,
    name: "Jacked Ensemble Aggregator",
    author: "Tommy TopGun",
    description:
      "An extremely stacked ensemble model based on the largely popular XG-Boost algorithm. Trained on 15 years' Indonesia Stock Exchange data by kaggle grandmaster Tommy TopGun.",
    rsquare: 0.65,
    ticker: "AAPL",
    uploaded: "01/10/2012",
  },
  1003: {
    id: 1003,
    name: "ZTS-37",
    author: "Mr Zhang",
    description:
      "v37 of Mr Zhang's best performing stock market prediction data. Trained on publicly scraped financial news data and computer vision.",
    rsquare: 0.63,
    ticker: "AAPL",
    uploaded: "01/10/2012",
  },
  1004: {
    id: 2,
    name: "Bae-st-sell",
    author: "Alex Baesell",
    description:
      "A highly optimised one-day forward prediction algorithm tuned rigorously over 5 million hyperparameters, giving confidence scores to users of when to hold or (bae)sell a particular stock.",
    rsquare: 0.58,
    ticker: "AAPL",
    uploaded: "01/10/2012",
  },
  1005: {
    id: 1005,
    name: "RegressionAggression",
    author: "Wenpsy",
    description:
      "A simple linear regression model trained continously for 3 years on the Shanghai Stock Exchange. R-Square Performance: 0.51",
    rsquare: 0.51,
    ticker: "AAPL",
    uploaded: "01/10/2012",
  },
};

export default models;
