import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import EditableTable from "../components/editableTable";
import Header from "../components/header";
//import Popup from "reactjs-popup";
//import IAppState from "../../stores/common/state";

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
  {
    title: "Test Method",
    field: "TestMethod",
  },
  { title: "Person Authorized", field: "PersonAuthorized" },
  { title: "Received On", field: "ReceivedOn", type: "date" },
  { title: "Targeted On", field: "TargetedOn", type: "date" },
  { title: "Completed On", field: "CompletedOn", type: "date" },
  { title: "Remarks", field: "Remarks" },
];

const data = [
  {
    sampleType: "testing sample",
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
// extends React.Component<any, any>
export default function TestPlanPopup() {
  // render() {
  return (
    <React.Fragment>
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
            label="Number of Samples / Quantity:"
            fullWidth
            autoComplete="sampleNo"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="testName"
            name="testName"
            label="Test Name"
            fullWidth
            autoComplete="testName"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="testMethod"
            name="testMethod"
            label="Test Method"
            fullWidth
            autoComplete="testMethod"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="personAuthorised"
            name="personAuthorised"
            label="Person Authorized"
            fullWidth
            autoComplete="personAuthorised"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="recievedOn"
            name="recievedOn"
            label="Received On"
            fullWidth
            autoComplete="recievedOn"
            type="date"
            defaultValue="2017-05-24"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="targetedOn"
            name="targetedOn"
            label="Targeted On"
            fullWidth
            autoComplete="targetedOn"
            type="date"
            defaultValue="2017-05-24"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="completedOn"
            name="completedOn"
            label="Completed On"
            fullWidth
            autoComplete="completedOn"
            type="date"
            defaultValue="2017-05-24"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="remarks"
            name="remarks"
            label="Remarks"
            fullWidth
            autoComplete="remarks"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <br />
      <div>
        <NavLink to="/testplan" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Cancel
          </Button>
        </NavLink>
        &nbsp; &nbsp;
        <NavLink to="/testplan" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Save
          </Button>
        </NavLink>
      </div>
    </React.Fragment>
  );
}
// }
