import React, { Component } from "react";
import AuthenticationService from "../services/AuthenticationService";
import withStyles from "@material-ui/core/styles/withStyles";
import { Route, Switch } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import DashboardContainer from "./DashboardContainer";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PageviewIcon from "@material-ui/icons/Pageview";
import ListAltIcon from "@material-ui/icons/ListAlt";
import WatchlistContainer from "./WatchlistContainer";
import ScreeningContainer from "./ScreeningContainer";
import StartpageContainer from "./StartpageContainer";
import StockContainer from "./StockContainer";
import InputBase from "@material-ui/core/InputBase";

import SearchIcon from "@material-ui/icons/Search";
import { fade } from "@material-ui/core";
import ModelContainer from "./ModelContainer";

const drawerWidth = 220;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  floatLeft: {
    flexGrow: 1,
    textAlign: "left",
  },
  floatRight: {
    textAlign: "right",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
});

class BaseContainer extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    const { classes, history } = this.props;

    if (!AuthenticationService.isLoggedIn()) {
      history.push(`/login`);
    }

    let user = AuthenticationService.getLoggedInUser();

    const tabsList = [
      {
        link: "/",
        text: "Dashboard",
        icon: <DashboardIcon />,
        onClick: () => history.push("/"),
      },
      {
        link: "/watchlist",
        text: "Watchlist",
        icon: <ListAltIcon />,
        onClick: () => history.push("/watchlist"),
      },
      {
        link: "/screening",
        text: "Screening",
        icon: <PageviewIcon />,
        onClick: () => history.push("/screening"),
      },
    ];

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <div className={classes.floatLeft}>
              {/*<Typography variant="h5">Pisces</Typography>*/}
              <img
                width="120"
                src={window.location.origin + "/Pisces.png"}
                alt={""}
              />
            </div>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            {user != null && (
              <div>
                <Typography noWrap>@{user.username}</Typography>
                <div style={{ textAlign: "left" }}>Investor Account</div>
              </div>
            )}
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              {tabsList.map((item, index) => {
                const { text, icon, onClick, link } = item;
                return (
                  <ListItem
                    button
                    key={text}
                    onClick={onClick}
                    selected={
                      this.props.location.pathname === link ||
                      (this.props.location.pathname === "" && link === "/")
                    }
                  >
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                  </ListItem>
                );
              })}
            </List>
            <Divider />
            <List>
              <ListItem button key="logout-button">
                <ListItemText
                  primary="Logout"
                  onClick={() => history.push(`/logout`)}
                />
              </ListItem>
            </List>
          </div>
        </Drawer>

        <main className={classes.content}>
          <Toolbar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <DashboardContainer {...props} />}
            />

            <Route
              exact
              path="/watchlist"
              render={(props) => <WatchlistContainer user={user} {...props} />}
            />

            <Route
              exact
              path="/screening"
              render={(props) => <ScreeningContainer {...props} />}
            />

            <Route
              exact
              path="/start"
              render={(props) => <StartpageContainer {...props} />}
            />

            <Route
              path="/stock/:ticker"
              render={(props) => (
                <StockContainer
                  user={user}
                  ticker={props.match.params.ticker}
                  {...props}
                />
              )}
            />

            <Route
              path="/model/:modelId"
              render={(props) => (
                <ModelContainer
                  user={user}
                  modelId={props.match.params.modelId}
                  {...props}
                />
              )}
            />

            {/*<Route*/}
            {/*  exact*/}
            {/*  path="/posts"*/}
            {/*  render={(props) => <PostContainer {...props} />}*/}
            {/*/>*/}
          </Switch>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(BaseContainer);
