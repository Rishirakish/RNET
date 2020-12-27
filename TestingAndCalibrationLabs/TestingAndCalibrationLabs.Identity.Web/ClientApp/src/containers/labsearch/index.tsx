import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import DropdownTreeSelect from "react-dropdown-tree-select";
import "react-dropdown-tree-select/dist/styles.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Header from "../../components/header";
import IAppState from "../../stores/common/state";
import {
  ITestCategoryState,
  TestCategoryArgs,
} from "../../stores/testsearch/type";
import data from "./data.json";
import "./index.css";
import { InputLabel } from "@material-ui/core";
import { addCategory } from "../../stores/testsearch/action";

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

type AddTestCategoryDispatchProps = {
  addTestCategory: (param: TestCategoryArgs) => void;
};

type Props = AddTestCategoryDispatchProps & ITestCategoryState;
type State = TestCategoryArgs;

export class TestSearch extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      category: "",
    };
  }

  onChange = (currentNode: any, selectedNodes: any) => {
    console.log("onChange::", selectedNodes[0]);
  };

  onAction = (node: any, action: any) => {
     console.log("onAction::", action, node);
  };

  onNodeToggle = (currentNode: any) => {
    // console.log("onNodeToggle::", currentNode);
  }; 

  render() {         
    return (     
      <React.Fragment>
        <Header />
        <div style={{ height: window.innerHeight, backgroundColor: "White" }}>
          <Grid
            container
            item
            xs={12}
            sm={12}
            alignItems="flex-end"
            justify="flex-end"
            direction="row"
          >
            <NavLink to="/jobReview/${hkk}" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                style={{ margin: 12 }}
              >
                Next
              </Button>
            </NavLink>
          </Grid>
          <Grid container spacing={3}>
            
          <InputLabel style={{ fontSize: "20px", color: "#000000", marginTop: "5%", marginLeft:"420px" }}>Select or Search test categories:</InputLabel>
              
            <Grid item xs={6}>
              <DropdownTreeSelect
                data={data}
                onChange={this.onChange}
                texts={{
                  placeholder: " ",
                }}
                keepOpenOnSelect={true}
                keepChildrenOnSearch={true}
                keepTreeOnSearch={true}
                showPartiallySelected={true}
                onAction={this.onAction}
                clearSearchOnChange={true}
              />
            </Grid>
            <Grid item xs={6}>
              {this.props.category}
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export function mapStateToProps(state: IAppState) {
  console.log(
    "Test search state = " + JSON.stringify(state.testSearchState.category)
  );
}

export function mapDispatchToProps(dispatch: any) {
  return {
    addTestCategory: (args: TestCategoryArgs) => dispatch(addCategory(args)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestSearch);
