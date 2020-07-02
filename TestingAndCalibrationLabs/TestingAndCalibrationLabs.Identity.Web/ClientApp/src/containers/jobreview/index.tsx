import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/header';
import IAppState from '../../stores/common/state';
import TestPlanList from './jobReviewSampleList';
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

class JobReview extends React.Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <Typography variant="h5" gutterBottom className={classes.title}>
          GLOBAL TESTING & RESEARCH LABORATORY
        </Typography> */}
        <Grid container item xs={12} spacing={3} style={{ margin: 0 }}>
          <Grid item xs={12} sm={9}>
            <Typography variant="h6">Job Serial No: QWERTASDFG </Typography>
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
                Submit & Print Receipt
              </Button>
            </NavLink>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={3}>
              <TextField
                required
                id="departmentSendingSample"
                name="departmentSendingSample"
                label="Department Sending Sample:"
                fullWidth
                autoComplete="departmentSendingSample"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                required
                id="customerNameAndAddress"
                name="customerNameAndAddress"
                label="Customer Name and Address:"
                fullWidth
                autoComplete="customerNameAndAddress"
                variant="outlined"
                multiline
                rowsMax={3}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              {/* <TextField
              required
              id="receivedOn"
              name="receivedOn"
              label="Received On:"
              fullWidth
              autoComplete="received On:"
              variant="outlined"
              type="date"
            /> */}
              <TextField
                id="receivedOn"
                name="receivedOn"
                label="Received On:"
                type="date"
                defaultValue="2017-05-24"
                fullWidth
                autoComplete="received On:"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                required
                id="jobOrderNo"
                name="jobOrderNo"
                label="Job Order No. / Ref No:"
                fullWidth
                autoComplete="jobOrderNo"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                required
                id="responsibleAuthority"
                name="responsibleAuthority"
                label="Responsible Authority:"
                fullWidth
                autoComplete="Responsible Authority"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                required
                id="requestForTestingOf"
                name="requestForTestingOf"
                label="Sub: Request for testing of:"
                fullWidth
                autoComplete="requestForTestingOf"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                required
                id="testReportReleaseDate"
                name="testReportReleaseDate"
                label="Test Report Release Date:"
                fullWidth
                autoComplete="testReportReleaseDate"
                type="date"
                defaultValue="2017-05-24"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                required
                id="anyOtherSpecificRequirement"
                name="anyOtherSpecificRequirement"
                label="Any other specific requirement:"
                fullWidth
                autoComplete="anyOtherSpecificRequirement"
                variant="outlined"
                multiline
                rowsMax={3}
              />
            </Grid>
          </Grid>
        </Grid>
        <br />
        <TestPlanList />
        <ul>
          <li>
            Customer requirements have been completely reviewed, and lab is
            capable of accepting the order.
          </li>
          <li>
            In case of any ambiguity, the conflicting requirements are marked
            above in red and further clarification may be sought from the
            customer, or the job may be refused.
          </li>
        </ul>
        "
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

export default connect(mapStateToProps, mapDispatchToProps)(JobReview);
