import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Header from "../../components/header";
import TestPlanList from "./testplanList";
import { connect } from "react-redux";
import IAppState from "../../stores/common/state";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  container: {
    margin: 0,
  },
  title: {
    textAlign: "center",
    paddingTop: "4px",
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  avatar: {
    margin: theme.spacing(1),
    width: 51,
    height: 50,
  },
  submit: {
    textAlign: "center",
  },
}));

class TestPlan extends React.Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <Typography variant="h5" gutterBottom className={classes.title}>
          GLOBAL TESTING & RESEARCH LABORATORY
        </Typography> */}
        <Grid container item xs={12} spacing={3} style={{ margin: 0 }}>
          <Grid item xs={12} sm={9}>
            <Typography variant="h6">JOB.S. NO: 1234 </Typography>
          </Grid>

          <Grid
            container
            item
            xs={12}
            sm={3}
            alignItems="flex-end"
            justify="flex-end"
            direction="row"
          >
            <NavLink to="/jobReviewForm" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">
                Next
              </Button>
            </NavLink>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="sampleType"
              name="sampleType"
              label="Sample Type"
              fullWidth
              autoComplete="Sample Type"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              required
              id="sampleDetails"
              name="sampleDetails"
              label="Sample Details"
              fullWidth
              autoComplete="Sample Details"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="dateOfTp"
              name="dateOfTp"
              label="Date of TP"
              fullWidth
              autoComplete="dateOfTp"
              type="date"
              defaultValue="2017-05-24"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="jobCode"
              name="jobCode"
              label="Job Code No:"
              fullWidth
              autoComplete="jobCode"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="sampleID"
              name="sampleID"
              label="Sample ID:"
              fullWidth
              autoComplete="sampleID"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="sampleNo"
              name="sampleNo"
              label="Sample No:"
              fullWidth
              autoComplete="sampleNo"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <br />
        <TestPlanList />
        <br />
      </React.Fragment>
    );
  }
}
export function mapStateToProps(state: IAppState) {
  console.log(state);
  //return state.authState;
}

export function mapDispatchToProps(dispatch: any) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPlan);
