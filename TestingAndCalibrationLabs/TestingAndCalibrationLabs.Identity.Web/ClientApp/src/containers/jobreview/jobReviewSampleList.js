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

export default function JobReviewSampleList() {
  const [state, setState] = React.useState({
        columns: [
      { title: 'Sample Description', field: 'sampleDescription' },
      { title: 'Sample Identification No', field: 'sampleIdentificationNo' },    
      { title: 'Quantity/Size/Weight', field: 'quantitySizeWeight', type: 'numeric'},          
      { title: 'No Of Test Required', field: 'noOfTestRequired', type: 'numeric'},        
      { title: 'Test Method\Protocol Used', field: 'TestMethodProtocolUsed'}
      // {
      //   title: 'Date Received',
      //   field: 'DateReceived',
      //   lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      // },
    ],
    data: [
      { sampleDescription: 'Test Sample Description 1', sampleIdentificationNo: 'qwert1', quantitySizeWeight: 3, noOfTestRequired:4, TestMethodProtocolUsed:"zxc method"},
      { sampleDescription: 'Test Sample Description 2', sampleIdentificationNo: 'qwert2', quantitySizeWeight: 4, noOfTestRequired:4, TestMethodProtocolUsed:"zxc protocol"},      
      { sampleDescription: 'Test Sample Description 3', sampleIdentificationNo: 'qwert3', quantitySizeWeight: 5, noOfTestRequired:4, TestMethodProtocolUsed:"zxc method"},
      { sampleDescription: 'Test Sample Description 4', sampleIdentificationNo: 'qwert4', quantitySizeWeight: 2, noOfTestRequired:4, TestMethodProtocolUsed:"zxc protocol"},            
      { sampleDescription: 'Test Sample Description 5', sampleIdentificationNo: 'qwert5', quantitySizeWeight: 2, noOfTestRequired:4, TestMethodProtocolUsed:"zxc method"},
      { sampleDescription: 'Test Sample Description 6', sampleIdentificationNo: 'qwert6', quantitySizeWeight: 1, noOfTestRequired:4, TestMethodProtocolUsed:"zxc protocol"}
    ],
  });  

  return (
    <MaterialTable
      title="Sample Receipt cum Job Review Form"
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