import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import DropdownTreeSelect from "react-dropdown-tree-select";
import "react-dropdown-tree-select/dist/styles.css";
import { NavLink } from "react-router-dom";
import Header from "../../components/header";
import data from "./data.json";
import "./index.css";

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
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
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
}));

export default function LabSearch() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header />

      <DropdownTreeSelect
        data={data}
        //className="tag-item .search react-dropdown-tree-select .dropdown .dropdown-trigger .dropdown-content"
        onChange={onChange}
        texts={{
          placeholder: "Select Test Category",
        }}
        showDropdown="default"
        // inlineSearchInput={
        //   true
        // }
        // keepOpenOnSelect={false}
        // keepChildrenOnSearch={false}
        keepTreeOnSearch={true}
      />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh",marginTop:'50px' }}
      >
        <Grid item xs={3}>
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
