import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class NotebookIframe extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    let { link, title, height } = this.props;
    if (link === null || link === undefined || link === "") {
      return <div>Error, unable to find chart!</div>;
    }
    return (
      <div style={{ padding: "10px", marginTop: "20px" }}>
        <Typography
          style={{
            padding: "5px",
            paddingBottom: "0px",
            textAlign: "left",
          }}
          variant="h6"
          color="default"
        >
          {title}
        </Typography>
        <div style={{ padding: "10px" }}>
          <iframe src={link} height={height} width={"100%"} />
        </div>
      </div>
    );
  }
}

export default NotebookIframe;
