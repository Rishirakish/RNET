import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from "../static/images/logo.jfif";
import loginPageSideImage from "../static/images/LoginPageSideImage.jpg";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  page:{
    background: `rgba(158, 115, 19, 0.04)`,
    borderRadius: 30,
    marginLeft: 20
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    width: 125,
    height: 123
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: `#4e5996`
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return ( 
  <React.Fragment>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar} style={{ backgroundColor: "#24292e" }}>
        <Toolbar className={classes.toolbar}>
        <Avatar className={classes.AppBar} src={logo}>
        </Avatar>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle} style={{ color: "white" }}>
            &nbsp;&nbsp;Testing and Calibration Laboratory
          </Typography>
          <Button href="#" color="primary" variant="outlined" className={classes.link} style={{ marginLeft: "auto", color: "white" }}>
            Sign up
          </Button>
        </Toolbar>
      </AppBar>  
      
      <TableContainer >
      <Table borderRadius="0" className={classes.table} aria-label="customized table" style={{ backgroundImage:`url(${loginPageSideImage})`}}>
        <TableRow>
          <TableCell>
       <Container component="main" maxWidth="xs" className={classes.form} style={{ backgroundColor: "White"}} >
      <CssBaseline />
      <br/>
        <Avatar className={classes.avatar} src={logo} style={{ marginLeft: "35%" }}>
        </Avatar>
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
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item style={{marginBottom: 30}}>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <div style={{ fontSize: "11px" }}>
            By clicking “Sign in for T&C Labs”, you agree to our&nbsp;
              <Link href="#">
               Terms of Service 
              </Link>
              &nbsp;and<Link href="#">
                {" Privacy Statement"}
              </Link>
              . We’ll occasionally send you account related emails.
              </div>
              <br/>
        </form>        
    </Container>
    <br/>
    <br/>
    <br/>
    <br/>    
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <img src={loginPageSideImage} />  */}
    </TableCell>
        </TableRow>
        </Table>
        </TableContainer>
        {/* <div style={{ backgroundColor: "black", color:"white"}} >
        <Container>
          <div height="300px"  style={{ marginLeft: "30%"}}>&copy; {new Date().getFullYear()} Copyright: <a href="https://www.T&CLabs.com" > TestingAndCalibrationLaboratory.com </a> &nbsp; All rights reserved</div>
        </Container>
      </div> */}
    </React.Fragment>
  );
}

