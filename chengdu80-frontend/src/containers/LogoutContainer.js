import React, { Component } from "react";

class LogoutContainer extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    localStorage.removeItem("user");
    return (
      <div>
        You have successfully logged out!{" "}
        <a href={"/login"}>return to login page</a>
      </div>
    );
  }
}

export default LogoutContainer;
