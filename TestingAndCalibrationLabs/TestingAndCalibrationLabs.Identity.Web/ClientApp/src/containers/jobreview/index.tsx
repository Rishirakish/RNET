import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React, { Fragment } from "react";
import { connect } from "react-redux";

import Header from "../../components/header";
import IAppState from "../../stores/common/state";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import JobReviewEditableTable from "../../components/jobReviewEditableTable";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import { PDFViewer } from '@react-pdf/renderer';
import Invoice from "../../components/Invoice";
import ReactPDF from '@react-pdf/renderer';
// Import React FilePond
import { FilePond, File, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

const searchList = [
  { key: 0, label: "Animal Food & Feed" },
  { key: 1, label: "Antimicrobial Activity Products" },
  { key: 2, label: "Cotton seed cake" },
];

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
  constructor(props: any) {
    super(props);
    this.state = {
      searchList: searchList,
      jobSerialNo: "",
      departmentSendingSample: "",
      customerName: "",
      issueTo: "",
      receivedOn: "",
      jobOrderNo: "",
      contactPersonName: "",
      mobileNumber: "",
      testReportReleaseDate: "",
      anyOtherSpecificRequirement: "",
      testingMaterial: "",
    };
  };

  handleJobSerialNo = (event: any) => {
    this.setState({jobSerialNo: event.target.value});
  };

  handleDepartmentSendingSample = (event: any) => {
    this.setState({departmentSendingSample: event.target.value});
  };

  handleCustomerName = (event: any) => {
    this.setState({customerName: event.target.value});
  };

  handleIssueTo = (event: any) => {
    this.setState({issueTo: event.target.value});
  };

  handleReceivedOn = (event: any) => {
    this.setState({receivedOn: event.target.value});
  };

  handleJobOrderNo = (event: any) => {
    this.setState({jobOrderNo: event.target.value});
  };

  handleContactPersonName = (event: any) => {
    this.setState({contactPersonName: event.target.value});
  };

  handleMobileNumber = (event: any) => {
    this.setState({mobileNumber: event.target.value});
  };

  handleTestReportReleaseDate = (event: any) => {
    this.setState({testReportReleaseDate: event.target.value});
  };

  handleAnyOtherSpecificRequirement = (event: any) => {
    this.setState({anyOtherSpecificRequirement: event.target.value});
  };

  handleTestingMaterial = (event: any) => {
    this.setState({testingMaterial: event.target.value});
  };

  handleDelete = (data: any) => {
    console.info("You clicked the delete icon.");
    this.setState({
      ...searchList,
      data,
    });
  };

  handleClick = (data: any) => {
    console.info("You clicked the  icon.");
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <Typography variant="h5" gutterBottom className={classes.title}>
          GLOBAL TESTING & RESEARCH LABORATORY
        </Typography> */}
        <Grid container spacing={1} style={{ marginTop: 10 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="jobSerialNo"
              name="jobSerialNo"
              label="Job Serial No:"
              fullWidth
              autoComplete="Job Serial No"
              variant="outlined"
              onInput={this.handleJobSerialNo}
            />
            {/* <Typography variant="h6">Job Serial No: QWERTASDFG</Typography> */}
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            alignItems="flex-end"
            justify="flex-end"
            direction="row"
          >
            <NavLink to="/jobReviewForm" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary" onClick={() => (
                    <Fragment>
                        <PDFViewer width="1000" height="600" className="app" >
                            <Invoice jobSerialNo={this.state.jobSerialNo}/>
                        </PDFViewer>
                    </Fragment>
                )}>
                Submit & Print Receipt
              </Button>
            </NavLink>
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="departmentSendingSample"
              name="departmentSendingSample"
              label="Department Name:"
              fullWidth
              autoComplete="departmentSendingSample"
              variant="outlined"
              onInput={this.handleDepartmentSendingSample}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="customerName"
              name="customerName"
              label="Customer Name"
              fullWidth
              autoComplete="customerName"
              variant="outlined"
              multiline
              rowsMax={3}
              onInput={this.handleCustomerName}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="issueTo"
              name="issueTo"
              label="Issue To"
              fullWidth
              autoComplete="issueTo"
              variant="outlined"
              multiline
              rowsMax={3}
              onInput={this.handleIssueTo}
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
              onInput={this.handleReceivedOn}
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
              onInput={this.handleJobOrderNo}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="contactPersonName"
              name="contactPersonName"
              label="Contact Person Name:"
              fullWidth
              autoComplete="Contact Person Name"
              variant="outlined"
              onInput={this.handleContactPersonName}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="mobileNumber"
              name="mobileNumber"
              label="Mobile Number:"
              fullWidth
              autoComplete="Mobile Number"
              variant="outlined"
              onInput={this.handleMobileNumber}
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
              onInput={this.handleTestReportReleaseDate}
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
              onInput={this.handleAnyOtherSpecificRequirement}
            />
          </Grid>

          <Grid item xs={12}>
            {/* <TextField
              required
              id="testingMaterial"
              name="testingMaterial"
              label="Testing Material:"
              fullWidth
              autoComplete="Testing Material"
              variant="outlined"
            >
              <Chip label={"Test"} onDelete={this.handleDelete} />
            </TextField> */}

            <label style={{ padding: 10 }}>Testing Material:</label>
            <Paper
              component="ul"
              style={{
                display: "flex",
                flexWrap: "wrap",
                listStyle: "none",
                padding: 5,
                margin: 5,
              }}
            >
              {this.state.searchList.map(
                (data: {
                  key: string | number | undefined;
                  label: React.ReactNode;
                }) => {
                  let icon;

                  return (
                    <li key={data.key} style={{ margin: 5 }}>
                      <NavLink
                        to="/testplan"
                        style={{ textDecoration: "none" }}
                      >
                        <Chip label={data.label} onClick={this.handleClick} />
                      </NavLink>
                    </li>
                  );
                }
              )}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <label style={{ padding: 10 }}>Attachments:</label>

            <FilePond
              //        files={files}
              //      onupdatefiles={setFiles}
              allowMultiple={true}
              maxFiles={10}
              server="/api"
              name="files"
              labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
          </Grid>
        </Grid>
        <br />
        <JobReviewEditableTable
          title="Sample Receipt cum Job Review Form"
          columns={columns}
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
