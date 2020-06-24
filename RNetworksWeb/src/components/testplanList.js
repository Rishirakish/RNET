import React from 'react';
import MaterialTable from 'material-table';

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

// const tableIcons = {
//     Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
//     Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//     Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
//     DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
//     Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
//     Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
//     FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//     LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//     NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
//     ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//     SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
//     ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//     ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
//   };

export default function testPlanList() {
  const [state, setState] = React.useState({
        columns: [
      { title: 'Test Name', field: 'TestName' },
      { title: 'Test Method', field: 'TestMethod' },
      { title: 'Person Autherized', field: 'PersonAutherized' },      
      { title: 'Received On', field: 'ReceivedOn', type: 'date'},          
      { title: 'Targeted On', field: 'TargetedOn', type: 'date'},        
      { title: 'Completed On', field: 'CompletedOn', type: 'date'},
      { title: 'Remarks', field: 'Remarks'}
      // {
      //   title: 'Date Received',
      //   field: 'DateReceived',
      //   lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      // },
    ],
    data: [
      { TestName: 'Material test 1', TestMethod: 'Material Strength', PersonAutherized: "Rishi", ReceivedOn:"6/23/2020", TargetedOn:"7/23/2020", CompletedOn:"8/23/2020", Remarks: "Some comments or information"},
      { TestName: 'Material test 2', TestMethod: 'Humidity Amount', PersonAutherized: "Sanjay", ReceivedOn:"5/23/2020", TargetedOn:"6/23/2020", CompletedOn:"8/23/2020", Remarks: "Some comments or information"},      
      { TestName: 'Material test 3', TestMethod: 'Material Strength', PersonAutherized: "Rishi", ReceivedOn:"6/23/2020", TargetedOn:"7/23/2020", CompletedOn:"8/23/2020", Remarks: "Some comments or information" },
      { TestName: 'Material test 4', TestMethod: 'Humidity Amount', PersonAutherized: "Sanjay", ReceivedOn:"5/23/2020", TargetedOn:"6/23/2020", CompletedOn:"8/23/2020", Remarks: "Some comments or information"},            
      { TestName: 'Material test 5', TestMethod: 'Material Strength', PersonAutherized: "Rishi", ReceivedOn:"6/23/2020", TargetedOn:"7/23/2020",  CompletedOn:"8/23/2020", Remarks: "Some comments or information" },
      { TestName: 'Material test 6', TestMethod: 'Humidity Amount', PersonAutherized: "Sanjay", ReceivedOn:"5/23/2020", TargetedOn:"6/23/2020",  CompletedOn:"8/23/2020", Remarks: "Some comments or information"}
    ],
  });  

  return (
    <MaterialTable
      title="Test Plan"
      columns={state.columns}
      data={state.data}
      icons = {{
        Search: () => <Search />,
        Add: () => <AddBox />,
        Clear: () => <Clear />,
        Check: () => <Check />,
        Delete: () => <DeleteOutline />,
        ArrowDownward: () => <ArrowDownward />,
        ChevronLeft: () => <ChevronLeft />,
        ChevronRight: () => <ChevronRight/>,
        DeleteOutline: () => <DeleteOutline />,
        Edit: () => <Edit />,
        FilterList: () => <FilterList />,
        FirstPage: () => <FirstPage />,
        LastPage: () => <LastPage />,
        NextPage: () => <ChevronRight />,
        PreviousPage: () => <ChevronLeft />,
        Remove: () => <Remove />,
        SaveAlt: () => <SaveAlt />,
        ViewColumn: () => <ViewColumn />,
        ResetSearch: () => <Clear />
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
    />
  );
}
