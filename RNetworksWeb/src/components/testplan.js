import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import logo from "../static/images/logo.jfif";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  container:{
    margin: 0
  },
  title:{
    textAlign: 'center',
    paddingTop: '4px'
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  avatar: {
    margin: theme.spacing(1),
    width: 51,
    height: 50
  },
  submit:{
    textAlign: 'center'
  }
}));

export default function TestPlan() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
        <Avatar className={classes.avatar} src={logo}>
        </Avatar>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Testing and Calibration Laboratory
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Last 5 Submissions
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Typography variant="h5" gutterBottom className={classes.title}>
        GLOBAL TESTING & RESEARCH LABORATORY
      </Typography>
      <Grid container item xs={12} spacing={3} className={classes.container}>
        
      <Grid item xs={12} sm={12}>
          <Typography variant='h6'>JOB.S. NO: 1234 </Typography>
        </Grid>
        <Grid container spacing={1} border={1}>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="sampleType"
              name="sampleType"
              label="Sample Type"
              fullWidth
              autoComplete="Sample Type"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              required
              id="sampleDetails"
              name="sampleDetails"
              label="Sample Details"
              fullWidth
              autoComplete="Sample Details"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="dateOfTp"
              name="dateOfTp"
              label="Date of TP"
              fullWidth
              autoComplete="dateOfTp"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="jobCode"
              name="jobCode"
              label="Job Code No:"
              fullWidth
              autoComplete="jobCode"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="sampleID"
              name="sampleID"
              label="Sample ID:"
              fullWidth
              autoComplete="sampleID"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="sampleNo"
              name="sampleNo"
              label="Sample No:"
              fullWidth
              autoComplete="sampleNo"
              variant="filled"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="testName"
            name="testName"
            label="Name of Test:"
            fullWidth
            autoComplete="testName"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="testMethod"
            name="testMethod"
            label="Test Method:"
            fullWidth
            autoComplete="testMethod"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="personAuthorised"
            name="personAuthorised"
            label="Person Authorised:"
            fullWidth
            autoComplete="personAuthorised"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="dateOfSampleRec" variant="outlined" name="dateOfSampleRec" label="Date of Sample recieved:" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="targetDateOfComp"
            name="targetDateOfComp"
            label="Target date of completion:"
            fullWidth
            autoComplete="targetDateOfComp"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="actualDateOfComp"
            name="actualDateOfComp"
            label="Actual date of completion:"
            fullWidth
            autoComplete="actualDateOfComp"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12} className={classes.submit}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
