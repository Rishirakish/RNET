import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import EditableTable from "../../components/editableTable";
import Header from "../../components/header";
import IAppState from "../../stores/common/state";

const columns = [
  {
    title: "Sample Type",
    field: "sampleType",
  },
  {
    title: "Sample Details",
    field: "sampleDetails",
  },
  {
    title: "Date of TP",
    field: "dateTp",
  },
  {
    title: "Job Code No",
    field: "jobCodeNo",
  },
  {
    title: "Sample Id",
    field: "sampleId",
  },
  {
    title: "Number of Samples/Quantity",
    field: "quantity",
  },
  {
    title: "Test Name",
    field: "TestName",
  },
  { title: "Test Method", field: "TestMethod" },
  { title: "Person Authorized", field: "PersonAuthorized" },
  { title: "Received On", field: "ReceivedOn", type: "date" },
  { title: "Targeted On", field: "TargetedOn", type: "date" },
  { title: "Completed On", field: "CompletedOn", type: "date" },
  { title: "Remarks", field: "Remarks" },
];

const data = [
  {
    sampleType:"testing sample",
    TestName: "Material test 1",
    TestMethod: "Material Strength",
    PersonAuthorized: "Rishi",
    ReceivedOn: "6/23/2020",
    TargetedOn: "7/23/2020",
    CompletedOn: "8/23/2020",
    Remarks: "Some comments or information",
  },
  {
    TestName: "Material test 2",
    TestMethod: "Humidity Amount",
    PersonAuthorized: "Sanjay",
    ReceivedOn: "5/23/2020",
    TargetedOn: "6/23/2020",
    CompletedOn: "8/23/2020",
    Remarks: "Some comments or information",
  },
  {
    TestName: "Material test 3",
    TestMethod: "Material Strength",
    PersonAuthorized: "Rishi",
    ReceivedOn: "6/23/2020",
    TargetedOn: "7/23/2020",
    CompletedOn: "8/23/2020",
    Remarks: "Some comments or information",
  },
];

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
            <Typography variant="h6">Job Serial No: QWERTASDFG</Typography>
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
            <NavLink to="/jobReview" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">
                Next
              </Button>
            </NavLink>
          </Grid>
        </Grid>
        <br />
        {/* <TestPlanList /> */}
        <EditableTable title="Test Plan" columns={columns} data={data} />
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
