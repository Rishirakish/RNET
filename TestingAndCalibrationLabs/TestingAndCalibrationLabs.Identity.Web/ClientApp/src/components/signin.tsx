import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import {
    createStyles, makeStyles,

    Theme
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React from "react";
import logo from "../static/images/logo.png";
import { LoginArgs } from "../stores/auth/type";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    page: {
      background: `rgba(158, 115, 19, 0.04)`,
      borderRadius: 30,
      marginLeft: 20,
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      width: 80,
      height: 80,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: `#4e5996`,
    },
  })
);

type props={
    
    onClick?: (val:LoginArgs) => void;

}

export default function SignIn(props: any) {
  const classes = useStyles();
  return (
    <Container
      component="main"
      maxWidth="xs"
      className={classes.form}
      style={{ backgroundColor: "White", marginTop: window.innerHeight/11 }}
    >
      <CssBaseline />
      <br />
      <Avatar
        className={classes.avatar}
        src={logo}
        style={{ marginLeft: "35%", height: "120px", width: "120px" }}
      ></Avatar>
      <Typography component="h1" variant="h5" style={{ marginLeft: "40%" }}>
        Sign in
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={props.onClick}
          style={{ height: "50px" }}
        >
          <span style={{ fontSize: "20px" }}>Sign In</span>
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item style={{ marginBottom: 30 }}>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <div style={{ fontSize: "11px" }}>
          By clicking “Sign in for T&C Labs”, you agree to our&nbsp;
          <Link href="#">Terms of Service</Link>
          &nbsp;and<Link href="#">{" Privacy Statement"}</Link>. We’ll
          occasionally send you account related emails.
        </div>
        <br />
      </form>
    </Container>
  );
}
