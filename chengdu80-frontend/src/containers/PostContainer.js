// import React, { Component } from "react";
// import withStyles from "@material-ui/core/styles/withStyles";
// import { connect } from "react-redux";
// import Typography from "@material-ui/core/Typography";
// import Post from "../components/Post";
// import Grid from "@material-ui/core/Grid";
//
// const styles = (theme) => ({
//   root: {
//     overflow: "auto",
//   },
// });
//
// class PostContainer extends Component {
//   static defaultProps = {};
//
//   static propTypes = {};
//
//   componentDidMount() {
//     if (this.props.firstLoad) {
//       this.props.load();
//     }
//   }
//
//   render() {
//     const { classes, loading, posts } = this.props;
//
//     if (loading) {
//       return <Typography>LOADING PLS WAIT</Typography>;
//     }
//
//     return (
//       <Grid
//         container
//         direction="column"
//         justify="center"
//         alignItems="center"
//         className={classes.root}
//         spacing={3}
//       >
//         <Grid item xs={12}>
//           {" "}
//           POSTS Title{" "}
//         </Grid>
//
//         <Grid item xs={6}>
//           {posts.map((post, index) => (
//             <Post key={index} {...post} />
//           ))}
//         </Grid>
//       </Grid>
//     );
//   }
// }
//
// const mapStateToProps = (state) => ({
//   loading: state.posts.loading,
//   error: state.posts.error,
//   posts: state.posts.posts,
//   firstLoad: state.posts.firstLoad,
// });
//
// const mapDispatchToProps = {
//   load: loadPosts,
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withStyles(styles())(PostContainer));
