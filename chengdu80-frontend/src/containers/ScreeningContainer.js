import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import companies from "../data/companies";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import prc from "../data/price";

const styles = (theme) => ({
  root: {
    overflow: "auto",
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  root2: {
    overflow: "auto",
  },
  searchfield: {
    overflow: "auto",
    margin: theme.spacing(2, 0),
  },
});

const columns = [
  { id: "company-name", label: "Company Name", minWidth: 170 },
  { id: "ticker", label: "Ticker", minWidth: 100 },
  { id: "industry", label: "Industry", minWidth: 200 },
  { id: "price", label: "Current Price ($)", minWidth: 100 },
  { id: "link", label: "", minWidth: 100 },
];

class ScreeningContainer extends Component {
  constructor(props) {
    super(props);
    this.handleUpdateSearch = this.handleUpdateSearch.bind(this);
  }

  static defaultProps = {};

  static propTypes = {};

  state = {
    page: 0,
    rowsPerPage: 10,
    search: "",
  };

  handleUpdateSearch(event) {
    this.setState({ search: event.target.value });
  }

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
    this.setState({ page: 0 });
  };

  render() {
    const { classes, history } = this.props;

    const filtered = companies.filter((company) => {
      let search = this.state.search.toLowerCase();
      if (search === "") {
        return true;
      } else {
        return (
          company.name.toLowerCase().includes(search) ||
          company.ticker.toLowerCase().includes(search) ||
          company.industry.toLowerCase().includes(search)
        );
      }
    });
    const view = filtered.slice(
      this.state.page * this.state.rowsPerPage,
      this.state.page * this.state.rowsPerPage + this.state.rowsPerPage
    );

    return (
      <Grid container className={classes.root} padd spacing={24}>
        <Grid item xs={12}>
          <Typography style={{ textAlign: "left" }} variant="h4">
            Screening
          </Typography>
          <Divider className={classes.divider} />
        </Grid>

        <Grid className={classes.searchfield} alignItems={"left"} item xs={3}>
          <TextField
            fullWidth
            id="standard-basic"
            label="Search"
            onChange={this.handleUpdateSearch}
          />
        </Grid>

        <Grid item xs={12}>
          <Paper style={{ midWidth: "500px" }} className={classes.root2}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        <Box fontWeight="fontWeightBold">{column.label}</Box>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {view.map(function (company) {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={company.id}
                      >
                        <TableCell
                          key={"company-name"}
                          align={"left"}
                          style={{ minWidth: "400px" }}
                        >
                          {company.name}
                        </TableCell>

                        <TableCell
                          key={"ticker"}
                          align={"left"}
                          style={{ minWidth: "200px" }}
                        >
                          {company.ticker}
                        </TableCell>

                        <TableCell
                          key={"industry"}
                          align={"left"}
                          style={{ minWidth: "200px" }}
                        >
                          {company.industry}
                        </TableCell>

                        <TableCell
                          key={"price"}
                          align={"left"}
                          style={{ minWidth: "100px" }}
                        >
                          {prc[company.ticker]}
                        </TableCell>

                        <TableCell
                          key={"link"}
                          align={"right"}
                          style={{ minWidth: "200px" }}
                        >
                          <Button
                            variant="contained"
                            color="default"
                            className={classes.button}
                            onClick={() =>
                              history.push(`/stock/${company.ticker}`)
                            }
                          >
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={filtered.length}
              rowsPerPage={this.state.rowsPerPage}
              page={this.state.page}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(ScreeningContainer);
