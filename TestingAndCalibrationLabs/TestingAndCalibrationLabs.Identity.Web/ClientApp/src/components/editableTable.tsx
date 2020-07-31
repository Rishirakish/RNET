import React from "react";
import MaterialTable, { Column } from "material-table";

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
import Popup from "reactjs-popup";
import TestPlanPopup from "../components/testPlanPopup";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  TextField,
  DialogActions,
  Button,
} from "@material-ui/core";
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

  return (
    <>
      <MaterialTable
        title={props.title}
        columns={props.columns}
        data={props.data}
        actions={[
          {
            icon: "add",
            tooltip: "Add Test",
            isFreeAction: true,
            onClick: (event, rowData) => {
              // <Popup trigger={<AddBox />} modal>
              //   {(close) => (
              //     <div className="modal">
              //       <br />
              //       <div className="header"> Test Plan </div>
              //       <br />
              //       <TestPlanPopup />
              //     </div>
              //   )}
              // </Popup>;
            },
          },
        ]}
        icons={{
          // Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
          Add: forwardRef((props, ref) => (
            <Popup trigger={<AddBox />} modal>
              {(close) => (
                <div className="modal">
                  <br />
                  <div className="header"> Test Plan </div>
                  <br />
                  <TestPlanPopup />
                </div>
              )}
            </Popup>
          )),
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
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
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

      <Popup trigger={<AddBox />} modal>
        {(close) => (
          <div className="modal">
            <br />
            <div className="header"> Test Plan </div>
            <br />
            <TestPlanPopup />
          </div>
        )}
      </Popup>
    </>
  );
}
