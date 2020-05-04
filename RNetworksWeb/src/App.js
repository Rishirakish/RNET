import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store";
import SignIn from "./components/signin";
//const store = configureStore();

class App extends Component {
  render() {
    return (
      <SignIn ></SignIn>
    );
  }
}

export default App;
