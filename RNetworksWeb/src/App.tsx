//import './App.css';

import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from './components/signin';
import SignUp from './components/signUp';
import TestPlan from './components/testplan';
import JobReviewForm from './components/jobReviewForm';

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
            <Route path="/jobReviewForm" component={JobReviewForm} />
          </Switch>
        </div>
      </div>      
    </div></Router>
   
    </global.Provider>
    
  );
}

export default App;
