//import './App.css';

import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import JobReviewForm from "./containers/jobreview/index";
import SignUp from "./containers/auth/signup";
import TestPlan from "./containers/testplan/index";
import SignIn from "./containers/auth/login";
import TestSearch from "./containers/labsearch";
import Dashboard from "./containers/dashboard";

function App(props: any) {
  const { match, location } = props;
  const isRoot = location.pathname === "/" ? true : false;
  if (isRoot) {
    return <Redirect to={"/dashboard"} />;
  }

  const global = React.createContext("globals");
  return (
    <global.Provider value="123">
      <Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path={`${match.url}signin`} component={SignIn} />
                <Route path={`${match.url}signup`} component={SignUp} />
                <Route path={`${match.url}testplan`} component={TestPlan} />
                <Route
                  path={`${match.url}jobReview/:id`}
                  component={JobReviewForm}
                />
                <Route path={`${match.url}search`} component={TestSearch} />
                <Route path={`${match.url}dashboard`} component={Dashboard} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>

      <div
        style={{ backgroundColor: "#24292e", color: "white", height: "100%" }}
      >
        <Container>
          {/* <div  style={{ marginLeft: "30%"}}>&copy; {new Date().getFullYear()} Copyright: <a href="https://www.T&CLabs.com" > TestingAndCalibrationLaboratory.com </a> &nbsp; All rights reserved</div> */}

          <div style={{ marginLeft: "30%", fontSize: "17px" }}>
            &copy; {new Date().getFullYear()} Copyright:&nbsp;
            <Link href="#">TestingAndCalibrationLaboratory.com</Link>
            &nbsp; All rights reserved
          </div>
        </Container>
      </div>
    </global.Provider>
  );
}

export default App;
