import React, { Component } from "react";
//import "./App.css";
import { Provider } from "react-redux";
//import configureStore from "./store";
import SignIn from "./components/signin";
import TestPlan from "./components/testplan"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Container from '@material-ui/core/Container';
import JobReviewForm from "./components/jobReviewForm";
import SignUp from "./components/signUp";
import Link from '@material-ui/core/Link';

function App() {
  const global = React.createContext('globals');
  return (<global.Provider value="123"><Router>
    
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={SignIn} />            
            <Route path="/signUp" component={SignUp} />
            <Route path="/testplan" component={TestPlan} />
            {/* <Route path="/jobReviewForm" component={JobReviewForm} /> */}
          </Switch>
        </div>
      </div>      
    </div></Router>
    <div style={{ backgroundColor: "#24292e", color:"white"}} height="100%">
        <Container>
          {/* <div  style={{ marginLeft: "30%"}}>&copy; {new Date().getFullYear()} Copyright: <a href="https://www.T&CLabs.com" > TestingAndCalibrationLaboratory.com </a> &nbsp; All rights reserved</div> */}
          
          <div style={{ marginLeft: "30%", fontSize: "17px"}}>
          &copy; {new Date().getFullYear()} Copyright:&nbsp;
              <Link href="#">
              TestingAndCalibrationLaboratory.com 
              </Link>
              &nbsp; All rights reserved
              </div>
        </Container>
      </div>
    </global.Provider>
    
  );
}

export default App;
