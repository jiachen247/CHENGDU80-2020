import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
    },
    Typography: {
      fontFamily: "Segoe UI",
      h4: {
        padding: 12,
        fontSize: 100,
        fontWeight: 1400,
        color: "#714C9C",
        marginBottom: 4,
      },
      h6: {
        padding: 16,
        fontSize: 12,
        fontWeight: 1400,
        color: "#000",
      },
    },
    shape: {
      borderRadius: 5,
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
