import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import DropdownTreeSelect from "react-dropdown-tree-select";
import "react-dropdown-tree-select/dist/styles.css";
import { NavLink } from "react-router-dom";
import Header from "../../components/header";
import data from "./data.json";
import "./index.css";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import { TableBody, TableRow } from "@material-ui/core";

const onChange = (currentNode: any, selectedNodes: any) => {
  console.log("onChange::", selectedNodes[0]);
};
const onAction = (node: any, action: any) => {
  console.log("onAction::", action, node);
};
const onNodeToggle = (currentNode: any) => {
  console.log("onNodeToggle::", currentNode);
};

const assignObjectPaths = (obj: { [x: string]: any }, stack: any) => {
  Object.keys(obj).forEach((k) => {
    const node = obj[k];
    if (typeof node === "object") {
      node.path = stack ? `${stack}.${k}` : k;
      assignObjectPaths(node, node.path);
    }
  });
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  container: {
    margin: 0,
  },
  title: {
    textAlign: "center",
    paddingTop: "4px",
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  avatar: {
    margin: theme.spacing(1),
    width: 51,
    height: 50,
  },
  submit: {
    textAlign: "center",
  },
  alignCenter: {
    alignSelf: "center",
    marginLeft: 500,
    marginTop: 50,
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    marginTop: "100px",
    marginLeft: "60px",
  },
}));

export default function LabSearch() {
  const classes = useStyles();
  const [nodes, setNodes] = useState();

  return (
    <React.Fragment>
      <Header />

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <DropdownTreeSelect
            data={data}
            //className="tag-item .search react-dropdown-tree-select .dropdown .dropdown-trigger .dropdown-content"
            onChange={(currentNode: any, selectedNodes: any) => {
             
              //setNodes(selectedNodes)
            }}
            texts={{
              placeholder: "Select Test Category",
            }}
            className={classes.paper}
            showDropdown="default"
            // inlineSearchInput={
            //   true
            // }
            // keepOpenOnSelect={false}
            // keepChildrenOnSearch={false}
            keepTreeOnSearch={true}
          />
        </Grid>
        <Grid item xs={6}>
          <Table>
            <TableBody>
              <TableRow></TableRow>
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={6}>
          <NavLink to="/testplan" style={{ textDecoration: "none" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Next
            </Button>
          </NavLink>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

// export function mapStateToProps(state: IAppState):ILoginState {
//   console.log(state);
//   //initErrorMessage(state.authState);
//   return state.authState
// }

// export function mapDispatchToProps(dispatch: any) {

//   return {};
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LabSearch);
