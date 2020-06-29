import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import {
  makeStyles,
  withStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import logo from "../static/images/logo.png";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: "wrap",
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
  })
);

type props = {
  onClick?: () => void;
};

export default function Header(props: any) {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
      style={{ backgroundColor: "#24292e" }}
    >
      <Toolbar className={classes.toolbar}>
        <Avatar src={logo}></Avatar>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
          style={{ color: "white" }}
        >
          &nbsp;&nbsp;Testing and Calibration Laboratory
        </Typography>
        <NavLink to="/search" style={{ textDecoration: 'none' }}>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
            style={{ marginLeft: "auto", color: "white" }}
          >
            Create New
          </Button>
        </NavLink>
        <Button
          href="#"
          color="primary"
          variant="outlined"
          className={classes.link}
          style={{ marginLeft: "auto", color: "white" }}
        >
          Sign up
        </Button>
      </Toolbar>
    </AppBar>
  );
}
