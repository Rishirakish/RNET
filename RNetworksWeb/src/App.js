import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store";
import SignIn from "./components/signin";
import TestPlan from "./components/testplan"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  const global = React.createContext('globals');
  return (<global.Provider value="123"><Router>
    
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={SignIn} />
            <Route path="/testplan" component={TestPlan} />
          </Switch>
        </div>
      </div>
    </div></Router></global.Provider>
    
  );
}

export default App;
