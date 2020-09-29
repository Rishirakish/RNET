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

export default function JobReviewEditableTable(props: any) {
  const [state, setState] = React.useState(data);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [dialogSampleDescription, setDialogSampleDescription] = React.useState("");
  const [dialogSampleId, setDialogSampleId] = React.useState("");
  const [dialogQuantity, setDialogQuantity] = React.useState(0);
  const [dialogNoOfTests, setDialogNoOfTests] = React.useState(0);
  const [dialogTestMethod, setDialogTestMethod] = React.useState("");
    
  const handleDialogClose = (event: any) => {
    setIsDialogOpen(false);
  };

  const handleSampleDescription = (event: any) => {
    setDialogSampleDescription(event.target.value);
  };

  const handleSampleId = (event: any) => {
    setDialogSampleId(event.target.value);
  };

  const handleQuantity = (event: any) => {
    setDialogQuantity(event.target.value);
  };

  const handleNoOfTests = (event: any) => {
    setDialogNoOfTests(event.target.value);
  };

  const handleTestMethod = (event: any) => {
    setDialogTestMethod(event.target.value);
  };

  const handleAddNewRow = (event: any) => {
    if (!dialogSampleDescription || !dialogSampleId || !dialogQuantity || !dialogNoOfTests || !dialogTestMethod ) return;
    setState(
      [{ sampleDescription: dialogSampleDescription,
         sampleIdentificationNo: dialogSampleId,
         quantitySizeWeight: dialogQuantity,
         noOfTestRequired: dialogNoOfTests,
         TestMethodProtocolUsed: dialogTestMethod}, ...data]
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
      setDialogSampleDescription("");
      setDialogSampleId("");
      setDialogQuantity(0);
      setDialogNoOfTests(0);
      setDialogTestMethod("");
    }
  }, [isDialogOpen]);

  const actions = [
    {
      icon: () => <AddBox />,
      tooltip: "Add Job",
      isFreeAction: true,
      onClick: (event: any, rowData: any) => {
        setIsDialogOpen(true);

      }
    },
    {
      icon: () => <Edit/>,
      tooltip: "Edit Job",
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
            Job Add Form
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="sampleDescription"
                  name="sampleDescription"
                  label="Sample Description"
                  fullWidth
                  autoComplete="sampleDescription"
                  variant="outlined"
                  defaultValue={dialogSampleDescription}
                  value={dialogSampleDescription}
                  onInput={handleSampleDescription}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  id="sampleIdentificationNo"
                  name="sampleIdentificationNo"
                  label="Sample Identification No:"
                  fullWidth
                  autoComplete="sampleIdentificationNo"
                  variant="outlined"
                  defaultValue={dialogSampleId}
                  value={dialogSampleId}
                  onInput={handleSampleId}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  id="quantitySizeWeight"
                  name="quantitySizeWeight"
                  label="Quantity/Size/Weight"
                  fullWidth
                  autoComplete="quantitySizeWeight"
                  variant="outlined"
                  defaultValue={dialogQuantity}
                  value={dialogQuantity}
                  onInput={handleQuantity}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="noOfTestRequired"
                  name="noOfTestRequired"
                  label="No Of Tests Required"
                  fullWidth
                  autoComplete="noOfTestRequired"
                  variant="outlined"
                  defaultValue={dialogNoOfTests}
                  value={dialogNoOfTests}
                  onInput={handleNoOfTests}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="TestMethodProtocolUsed"
                  name="TestMethodProtocolUsed"
                  label="Test Method/Protocol Used"
                  fullWidth
                  autoComplete="TestMethodProtocolUsed"
                  variant="outlined"
                  defaultValue={dialogTestMethod}
                  value={dialogTestMethod}
                  onInput={handleTestMethod}
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
