import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React from "react";

import loginPageSideImage from "../../../static/images/LoginPageSideImage.jpg";
import logo from "../../../static/images/logo.png";
import Header from "../../../components/header";
import SignIn from "../../../components/signin";

import IAppState from "../../../stores/common/state";
import { ILoginState, LoginArgs } from "../../../stores/auth/type";
import { connect } from "react-redux";
import { login } from "../../../stores/auth/action";
import { Redirect } from "react-router-dom";

type LoginDispatchProps = {
  login: (param: LoginArgs) => void;
};

type LoginProps = LoginDispatchProps & ILoginState;
type LoginState = LoginArgs;

class Login extends React.Component<LoginProps, LoginState> {
  login = (val: LoginArgs) => {
    //alert("Login")
    this.props.login(val);
  };
  render() {
    if(this.props.success){
      return <Redirect to={"/dashboard"}/>
    }
    return (
      <React.Fragment>
        <Header />

        <TableContainer
          style={{ backgroundImage: `url(${loginPageSideImage})` }}
        >
          <Table aria-label="customized table">
            <TableRow>
              <TableCell>
                <SignIn onClick={this.login} />
              
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </React.Fragment>
    );
  }
}
export function mapStateToProps(state: IAppState): ILoginState {
  console.log(state);
  return state.authState;
}

export function mapDispatchToProps(dispatch: any) {
  return {
     login: (args: LoginArgs) => dispatch(login(args)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
