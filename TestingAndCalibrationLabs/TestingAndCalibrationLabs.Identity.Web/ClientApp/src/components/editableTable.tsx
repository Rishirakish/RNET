import React, { Fragment, useEffect } from "react";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core";

type props = {
  title?: string;
  columns?: any;
};

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
    sampleDetails: "NA",
    dateTp: "8/23/2020",
    jobCodeNo: "5345",
    sampleId: "45345",
    quantity: "10",
  },
  {
    sampleType: "testing sample",
    TestName: "Material test 2",
    TestMethod: "Humidity Amount",
    PersonAuthorized: "Sanjay",
    ReceivedOn: "5/23/2020",
    TargetedOn: "6/23/2020",
    CompletedOn: "8/23/2020",
    Remarks: "Some comments or information",
    sampleDetails: "NA",
    dateTp: "8/23/2020",
    jobCodeNo: "5345",
    sampleId: "45345",
    quantity: "10",
  },
  {
    sampleType: "testing sample",
    TestName: "Material test 3",
    TestMethod: "Material Strength",
    PersonAuthorized: "Rishi",
    ReceivedOn: "6/23/2020",
    TargetedOn: "7/23/2020",
    CompletedOn: "8/23/2020",
    Remarks: "Some comments or information",
    sampleDetails: "NA",
    dateTp: "8/23/2020",
    jobCodeNo: "5345",
    sampleId: "45345",
    quantity: "10",
  },
];

export default function EditableTable(props: any) {
  const [state, setState] = React.useState(data);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [dialogSampleType, setDialogSampleType] = React.useState("");
  const [dialogSampleDetails, setDialogSampleDetails] = React.useState("");
  const [dialogDateOfTp, setDialogDateOfTp] = React.useState("");
  const [dialogJobCodeNo, setDialogJobCodeNo] = React.useState("");
  const [dialogSampleId, setDialogSampleId] = React.useState("");
  const [dialogQuantity, setDialogQuantity] = React.useState("");
  const [dialogTestName, setDialogTestName] = React.useState("");
  const [dialogTestMethod, setDialogTestMethod] = React.useState("");
  const [dialogPersonAuthorized, setDialogPersonAuthorized] = React.useState("");
  const [dialogRecievedOn, setDialogRecievedOn] = React.useState("");
  const [dialogTargetedOn, setDialogTargetedOn] = React.useState("");
  const [dialogCompletedOn, setDialogCompletedOn] = React.useState("");
  const [dialogRemarks, setDialogRemarks] = React.useState("");
  
  const handleDialogClose = (event: any) => {
    setIsDialogOpen(false);
  };

  const handleSampleType = (event: any) => {
    setDialogSampleType(event.target.value);
  };

  const handleSampleDetails = (event: any) => {
    setDialogSampleDetails(event.target.value);
  };

  const handleDateOfTp = (event: any) => {
    setDialogDateOfTp(event.target.value);
  };

  const handleJobCodeNo = (event: any) => {
    setDialogJobCodeNo(event.target.value);
  };

  const handleSampleId = (event: any) => {
    setDialogSampleId(event.target.value);
  };

  const handleQuantity = (event: any) => {
    setDialogQuantity(event.target.value);
  };

  const handleTestName = (event: any) => {
    setDialogTestName(event.target.value);
  };

  const handleTestMethod = (event: any) => {
    setDialogTestMethod(event.target.value);
  };

  const handlePersonAuthorized = (event: any) => {
    setDialogPersonAuthorized(event.target.value);
  };

  const handleRecievedOn = (event: any) => {
    setDialogRecievedOn(event.target.value);
  };

  const handleTargetedOn = (event: any) => {
    setDialogTargetedOn(event.target.value);
  };

  const handleCompletedOn = (event: any) => {
    setDialogCompletedOn(event.target.value);
  };

  const handleRemarks = (event: any) => {
    setDialogRemarks(event.target.value);
  };

  const handleAddNewRow = (event: any) => {
    if (!dialogSampleType || !dialogSampleDetails || !dialogDateOfTp || !dialogJobCodeNo || !dialogSampleId || !dialogQuantity || !dialogTestName || !dialogTestMethod || !dialogPersonAuthorized || !dialogRecievedOn || !dialogTargetedOn || !dialogCompletedOn || !dialogRemarks) return;
    setState(
      [{ sampleType: dialogSampleType, 
         sampleDetails: dialogSampleDetails,
         dateTp: dialogDateOfTp,
         jobCodeNo: dialogJobCodeNo,
         sampleId: dialogSampleId,
         quantity: dialogQuantity,
         TestName: dialogTestName,
         TestMethod: dialogTestMethod,
         PersonAuthorized: dialogPersonAuthorized,
         ReceivedOn: dialogRecievedOn,
         TargetedOn: dialogTargetedOn,
         CompletedOn: dialogCompletedOn,
         Remarks: dialogRemarks }, ...data]
    );
  };

  useEffect(
    () => {
      if (isDialogOpen) {
        setIsDialogOpen(false);
      }
    },
    [state]
  );

  useEffect(() => {
    if (!isDialogOpen) {
      setDialogSampleType("");
      setDialogSampleDetails("");
      setDialogDateOfTp("");
      setDialogJobCodeNo("");
      setDialogSampleId("");
      setDialogQuantity("");
      setDialogTestName("");
      setDialogTestMethod("");
      setDialogPersonAuthorized("");
      setDialogRecievedOn("");
      setDialogTargetedOn("");
      setDialogCompletedOn("");
      setDialogRemarks("");
    }
  }, [isDialogOpen]);

  const actions = [
    {
      icon: () => <AddBox />,
      tooltip: "Add Plan",
      isFreeAction: true,
      onClick: (event: any, rowData: any) => {
        setIsDialogOpen(true);

      }
    },
    {
      icon: () => <Edit/>,
      tooltip: "Edit Plan",
      onClick: (event: any, rowData: any) => {
        setIsDialogOpen(true);
      }
    }
  ];

  return (
      <Fragment>
        <MaterialTable
          data={state}
          columns={props.columns}
          actions={actions}
          title={props.title}
          icons={{
            Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
            Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
            Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
            Delete: forwardRef((props, ref) => (
              <DeleteOutline {...props} ref={ref} />
            )),
            DetailPanel: forwardRef((props, ref) => (
              <ChevronRight {...props} ref={ref} />
            )),
            Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
            Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
            Filter: forwardRef((props, ref) => (
              <FilterList {...props} ref={ref} />
            )),
            FirstPage: forwardRef((props, ref) => (
              <FirstPage {...props} ref={ref} />
            )),
            LastPage: forwardRef((props, ref) => (
              <LastPage {...props} ref={ref} />
            )),
            NextPage: forwardRef((props, ref) => (
              <ChevronRight {...props} ref={ref} />
            )),
            PreviousPage: forwardRef((props, ref) => (
              <ChevronLeft {...props} ref={ref} />
            )),
            ResetSearch: forwardRef((props, ref) => (
              <Clear {...props} ref={ref} />
            )),
            Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
            SortArrow: forwardRef((props, ref) => (
              <ArrowDownward {...props} ref={ref} />
            )),
            ThirdStateCheck: forwardRef((props, ref) => (
              <Remove {...props} ref={ref} />
            )),
            ViewColumn: forwardRef((props, ref) => (
              <ViewColumn {...props} ref={ref} />
            )),
          }}
          editable={{
            onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                // setState((prevState) => {
                //   const data = [...prevState.data];
                //   data.splice(data.indexOf(oldData), 1);
                //   return { ...prevState, data };
                // });
              }, 600);
            }),
          }}
          options={{
            headerStyle: {
              backgroundColor: "#eeeeee",
              color: "#000",
            },
          }}
          style={{
            overflowX: "auto",
          }}
        />
        <Dialog open={isDialogOpen} onClose={handleDialogClose} fullWidth={ true } maxWidth={"md"}>
          <DialogTitle id="form-dialog-title">
            Test Plan
          </DialogTitle>
          <DialogContent>
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
                  defaultValue={dialogSampleType}
                  value={dialogSampleType}
                  onInput={handleSampleType}
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
                  defaultValue={dialogSampleDetails}
                  value={dialogSampleDetails}
                  onInput={handleSampleDetails}
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
                  value={dialogDateOfTp}
                  onInput={handleDateOfTp}
                  InputLabelProps={{
                    shrink: true,
                  }}
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
                  defaultValue={dialogJobCodeNo}
                  value={dialogJobCodeNo}
                  onInput={handleJobCodeNo}
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
                  defaultValue={dialogSampleId}
                  value={dialogSampleId}
                  onInput={handleSampleId}
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
                  defaultValue={dialogQuantity}
                  value={dialogQuantity}
                  onInput={handleQuantity}
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
                  defaultValue={dialogTestName}
                  value={dialogTestName}
                  onInput={handleTestName}
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
                  defaultValue={dialogTestMethod}
                  value={dialogTestMethod}
                  onInput={handleTestMethod}
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
                  defaultValue={dialogPersonAuthorized}
                  value={dialogPersonAuthorized}
                  onInput={handlePersonAuthorized}
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
                  value={dialogRecievedOn}
                  onInput={handleRecievedOn}
                  InputLabelProps={{
                    shrink: true,
                  }}
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
                  value={dialogTargetedOn}
                  onInput={handleTargetedOn}
                  InputLabelProps={{
                    shrink: true,
                  }}
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
                  value={dialogCompletedOn}
                  onInput={handleCompletedOn}
                  InputLabelProps={{
                    shrink: true,
                  }}
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
                  defaultValue={dialogRemarks}
                  value={dialogRemarks}
                  onInput={handleRemarks}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <div>
              <Button variant="contained" color="primary" onClick={handleDialogClose}>
                Cancel
              </Button>
              &nbsp; &nbsp;
                <Button variant="contained" color="primary" onClick={handleAddNewRow}>
                  Save
                </Button>
            </div>
          </DialogActions>
        </Dialog>
      </Fragment>
  );
}
