import React from "react";
import { connect } from "react-redux";
import IAppState from "../../stores/common/state";

import DropdownTreeSelect from "react-dropdown-tree-select";
import "react-dropdown-tree-select/dist/styles.css";
import data from "./data.json";
//import "./style.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
//import logo from "./../../static/images/logo.jfif";
import "./index.css";
import { ILoginState } from "../../stores/auth/type";
import { Redirect } from "react-router";

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
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          {/* <Avatar className={classes.avatar} src={logo}></Avatar> */}
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Testing and Calibration Laboratory
          </Typography>
          <nav></nav>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <DropdownTreeSelect
        data={data}
        //className="tag-item .search react-dropdown-tree-select .dropdown .dropdown-trigger .dropdown-content"
        onChange={onChange}
        texts={{
          placeholder: "Laboratory Search",

        }}
        showDropdown="always"
        // inlineSearchInput={
        //   true
        // }
        // keepOpenOnSelect={false}
        // keepChildrenOnSearch={false}
        keepTreeOnSearch={true}
      />
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
