import * as React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

//import PrivateRoute from "./hoc/privateRoute";
import IAppState from "./stores/common/state";
import SignIn from "./components/signin";
import TestPlan from "./components/testplan";
import LabSearch from "./containers/lab_search";
import Dashboard from "./containers/dashboard";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/now-ui-dashboard.scss?v1.2.0";
 import "./assets/css/demo.css";


function App(props: any) {
  const { match, location } = props;
  const isRoot = location.pathname === '/' ? true : false;
    if (isRoot) {
      return ( <Redirect to={'/login'}/> );
    }

  return (
    <>
      <Route exact path={`${match.url}login`} component={SignIn} />
      <Route exact path={`${match.url}plan`} component={TestPlan} />
      <Route exact path={`${match.url}dashboard/lab`} component={LabSearch} />
      <Route exact path={`${match.url}dashboard`} component={Dashboard} />

    </>
  );
}

function mapStateToProps(state: IAppState) {
  console.log("App State = " + JSON.stringify(state));

  return {};
}

export default connect(mapStateToProps)(App);
