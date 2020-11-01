import React from "react";
import { Route, Switch } from "react-router-dom";
import Con from "./containers/index";
import "./App.css";
import Checkout from "./components/payment/Checkout";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/welcome"
          render={(props) => <Con.WelcomeContainer {...props} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Con.LoginContainer {...props} />}
        />
        <Route
          exact
          path="/register"
          render={(props) => <Con.RegisterContainer {...props} />}
        />
        <Route
          exact
          path="/logout"
          render={(props) => <Con.LogoutContainer {...props} />}
        />

        <Route
          exact
          path="/payment"
          render={(props) => <Checkout {...props} />}
        />

        <Route path="/" render={(props) => <Con.BaseContainer {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
