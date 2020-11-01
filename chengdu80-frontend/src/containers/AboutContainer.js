import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Container from "@material-ui/core/Container";

const styles = (theme) => ({
  root: {
    overflow: "auto",
  },
});

class AboutContainer extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="false" className={classes.root}>
        <div>
          about pageThis is the about pageThis is the about pageabout pageThis
          is the about pageThis is the about pageabout pageThis is the about
          pageThis is the about pageabout pageThis is the about pageThis is the
          about pageabout pageThis is the about pageThis is the about pageabout
          pageThis is the about pageThis is the about pageabout pageThis is the
          about pageThis is the about pageabout pageThis is the about pageThis
          is the about pageabout pageThis is the about pageThis is the about
          pageabout pageThis is the about pageThis is the about page
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(AboutContainer);
