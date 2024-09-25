import React, { RefObject } from "react";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../../components/header";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { TableContainer } from "@material-ui/core";

class Dashboard extends React.Component {
  createNew = () => {
    // this.props.history.push("/search")
  };

  render() {
    return (
      <React.Fragment>
        
        <Header onClick={this.createNew} />
        <Container>
        <div style={{height:  window.innerHeight}}></div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Dashboard;
