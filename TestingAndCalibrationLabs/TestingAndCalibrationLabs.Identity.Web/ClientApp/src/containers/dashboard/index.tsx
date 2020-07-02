import React, { RefObject } from "react";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../../components/header";

class Dashboard extends React.Component {

  createNew = () => {
    // this.props.history.push("/search")
  };

  render() {
    return (
      <React.Fragment>
        <Header onClick={this.createNew}/>
      </React.Fragment>
    );
  }
}

export default Dashboard;
