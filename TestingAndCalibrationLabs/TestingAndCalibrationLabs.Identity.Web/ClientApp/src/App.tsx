//import './App.css';

import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JobReviewForm from "./containers/jobreview/index";
import SignUp from "./containers/auth/signup";
import TestPlan from "./containers/testplan/index";
import SignIn from "./containers/auth/login";
import LabSearch from "./containers/labsearch";
import Dashboard from "./containers/dashboard"

function App() {
  const global = React.createContext("globals");
  return (
    <global.Provider value="123">
      <Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/testplan" component={TestPlan} />
                <Route path="/jobReviewForm" component={JobReviewForm} />
                <Route path="/search" component={LabSearch} />
                <Route path="/" component={Dashboard}/>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    
    </global.Provider>
  );
}

export default App;
