import React from "react";
import { connect } from "react-redux";
import IAppState from "../../stores/common/state";

import DropdownTreeSelect from "react-dropdown-tree-select";
import "react-dropdown-tree-select/dist/styles.css";
import data from "./data.json";
//import "./style.css";

const onChange = (currentNode: any, selectedNodes: any) => {
  console.log("onChange::", currentNode, selectedNodes);
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

class LabSearch extends React.Component<any, any> {
  constructor(props: Readonly<any>) {
    super(props);
    //assignObjectPaths(data);
  }

  render() {
    return (
      <DropdownTreeSelect
        data={data}
        onChange={onChange}
      />
    );
  }
}

export function mapStateToProps(state: IAppState) {
  console.log(state);
  //initErrorMessage(state.authState);
}

export function mapDispatchToProps(dispatch: any) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(LabSearch);
