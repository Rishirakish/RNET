import React, { Fragment } from "react";
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
import { NavLink } from "react-router-dom";

type props = {
  title?: string;
  columns?: any;
  data?: any;
};

export default function EditableTable(props: any) {
  const [state, setState] = React.useState({
    data: props.data,
  });
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  
  const handleDialogClose = (event: any) => {
    setIsDialogOpen(false);
  };

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
          data={props.data}
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
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
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
          </DialogContent>
          <DialogActions>
            <div>
              <Button variant="contained" color="primary" onClick={handleDialogClose}>
                Cancel
              </Button>
              &nbsp; &nbsp;
              <NavLink to="/testplan" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="primary">
                  Save
                </Button>
              </NavLink>
            </div>
          </DialogActions>
        </Dialog>
      </Fragment>
  );
}
