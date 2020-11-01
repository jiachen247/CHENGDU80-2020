import React, { Component } from "react";
import { connect } from "react-redux";
import authService from "../services/AuthenticationService";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/core/styles/withStyles";
import Modal from "@material-ui/core/Modal";
import Alert from "@material-ui/lab/Alert";
import Tooltip from "@material-ui/core/Tooltip";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  dualbutton: {
    height: 40,
    width: 150,
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(4),
    marginBottom: theme.spacing(16),
  },
  s1: {
    marginBottom: theme.spacing(1.5),
    alignItems: "center",
    justify: "center",
    height: 900,
    backgroundColor: "#594DB3",
  },
  s2: {
    marginBottom: theme.spacing(1.5),
    height: 700,
  },
  s3: {
    height: 100,
    backgroundColor: "#594DB3",
    paddingTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },
  l1: {
    paddingTop: theme.spacing(40),
  },
  l2: {
    paddingTop: theme.spacing(20),
  },

  t1: {
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    fontSize: 60,
    fontWeight: 700,
    textAlign: "left",
    alignItems: "left",
    //    backgroundColor: "#594DB3"
  },
  t2: {
    paddingLeft: theme.spacing(5),
    fontSize: 60,
    fontWeight: 700,
    textAlign: "left",
    alignItems: "left",
    //    backgroundColor: "#594DB3"
  },
  t3: {
    marginTop: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    fontSize: 30,
    textAlign: "left",
    alignItems: "left",
  },
  submit2: {
    marginTop: theme.spacing(15),
    height: 70,
    width: 200,
    fontSize: 25,
  },
});

class LoginContainer extends Component {
  static defaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      username: "steve",
      password: "123456",
      authFailed: false,
      comeFromSignup: props.location.hash == "#signup",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;
    if (username && password) {
      let user = authService.authenticate(username, password);
      if (user == null) {
        this.setState({ authFailed: true });
      } else {
        authService.setUser(user);
        this.props.history.push(`/`);
      }
    }
  }

  render() {
    let { username, password, authFailed, comeFromSignup } = this.state;
    const { classes, history } = this.props;

    if (authService.isLoggedIn()) {
      history.push(`/`);
    }
    return (
      <div styles={{ paddingTop: "100px" }}>
        <Box className={classes.s1}>
          <div className={classes.l1}>
            <img width="180" src="/Pisces-Logo-Square.png" />
          </div>
        </Box>
        <Box container className={classes.s2}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid xs={6}>
              <Typography className={classes.t1} styles={{ textAlign: "left" }}>
                {" "}
                Your one Investment
              </Typography>
              <Typography className={classes.t2} styles={{ textAlign: "left" }}>
                {" "}
                Intelligence for
              </Typography>
              <Typography className={classes.t2} styles={{ textAlign: "left" }}>
                {" "}
                your Stock Investment
              </Typography>
            </Grid>

            <Grid xs={6}>
              <img width="600" src="/Pisces-black.png" />
            </Grid>
          </Grid>

          <Typography className={classes.t3} styles={{ lineHeight: "120" }}>
            Technology and innovation are shaping better ways for people to do
            things. None has really brought this impact into the world of
            investing. Not until we created them, the robots. The introduction
            of RoboInvesting in 2017 has created a new quantitative way for
            retail investors to seek profit from the market. However, most of
            investors are very cautious to trust the Artificial Intelligence due
            to the Black-box approach of model for accuracy. Pisces is developed
            exactly to address those concern, as we utilise explainable AI to
            explain those models.
          </Typography>
        </Box>

        <Box container className={classes.s3}>
          <img width="150px" src="/Pisces-Horizontal - White.png" alt="logo" />
        </Box>

        <Grid container direction="column">
          <Grid item justify="flex-end">
            {" "}
          </Grid>
          <Grid>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>

                {comeFromSignup && (
                  <Alert severity="success"> Sign up successful!</Alert>
                )}
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={this.handleSubmit}
                >
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    value={username}
                    onChange={this.handleChange}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={this.handleChange}
                  />
                  {authFailed && (
                    <div className="help-block">
                      Failed to login, please try again.
                    </div>
                  )}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Login
                  </Button>
                  <Grid container>
                    <Grid item>
                      <Typography variant="body2">
                        {"Don't have an account? Sign up for an account here!"}
                      </Typography>

                      <Grid
                        className={classes.marg}
                        alignItems={"center"}
                        justify={"center"}
                        xs={12}
                        marginTop="20px"
                      >
                        <Button
                          color="primary"
                          variant={"contained"}
                          className={classes.dualbutton}
                          onClick={() => history.push("/register")}
                        >
                          Investor
                        </Button>

                        <Tooltip title="Registration for contributor has not been implemented yet.">
                          <Button
                            color="secondary"
                            variant={"contained"}
                            className={classes.dualbutton}
                            styles={{ backgroundColor: "green" }}
                          >
                            Contributor
                          </Button>
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </Grid>
                </form>
              </div>
              <Box mt={8}></Box>
            </Container>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect()(withStyles(styles)(LoginContainer));
