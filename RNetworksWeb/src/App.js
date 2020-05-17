import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store";
import SignIn from "./components/signin";
import TestPlan from "./components/testplan"
//const store = configureStore();

class App extends Component {
  render() {
    return (
      <TestPlan ></TestPlan>
    );
  }
}

export default App;
