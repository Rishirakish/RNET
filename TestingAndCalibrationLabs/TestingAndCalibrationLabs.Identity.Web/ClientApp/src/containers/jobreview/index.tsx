import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { connect } from "react-redux";

import Header from "../../components/header";
import IAppState from "../../stores/common/state";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import EditableTable from "../../components/editableTable";


const columns = [
  { title: "Sample Description", field: "sampleDescription" },
  { title: "Sample Identification No", field: "sampleIdentificationNo" },
  {
    title: "Quantity/Size/Weight",
    field: "quantitySizeWeight",
    type: "numeric",
  },
  { title: "No Of Test Required", field: "noOfTestRequired", type: "numeric" },
  { title: "Test MethodProtocol Used", field: "TestMethodProtocolUsed" },
];

const data = [
  {
    sampleDescription: "Test Sample Description 1",
    sampleIdentificationNo: "qwert1",
    quantitySizeWeight: 3,
    noOfTestRequired: 4,
    TestMethodProtocolUsed: "zxc method",
  },
  {
    sampleDescription: "Test Sample Description 2",
    sampleIdentificationNo: "qwert2",
    quantitySizeWeight: 4,
    noOfTestRequired: 4,
    TestMethodProtocolUsed: "zxc protocol",
  },
  {
    sampleDescription: "Test Sample Description 3",
    sampleIdentificationNo: "qwert3",
    quantitySizeWeight: 5,
    noOfTestRequired: 4,
    TestMethodProtocolUsed: "zxc method",
  },
  {
    sampleDescription: "Test Sample Description 4",
    sampleIdentificationNo: "qwert4",
    quantitySizeWeight: 2,
    noOfTestRequired: 4,
    TestMethodProtocolUsed: "zxc protocol",
  },
  {
    sampleDescription: "Test Sample Description 5",
    sampleIdentificationNo: "qwert5",
    quantitySizeWeight: 2,
    noOfTestRequired: 4,
    TestMethodProtocolUsed: "zxc method",
  },
  {
    sampleDescription: "Test Sample Description 6",
    sampleIdentificationNo: "qwert6",
    quantitySizeWeight: 1,
    noOfTestRequired: 4,
    TestMethodProtocolUsed: "zxc protocol",
  },
];

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
        <EditableTable
          title="Sample Receipt cum Job Review Form"
          columns={columns}
          data = {data}
        />
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
