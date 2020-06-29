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
import logo from "../static/images/logo.png";
import TestPlanList from './jobReviewSampleList';

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

export default function JobReviewForm() {
  const classes = useStyles();
  return (
    <React.Fragment>
    
      <AppBar position="static" color="default" elevation={0} className={classes.appBar} style={{ backgroundColor: "#24292e" }}>
        <Toolbar className={classes.toolbar}>
        <Avatar className={classes.avatar} src={logo}>
        </Avatar>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle} style={{ color: "white" }}>
            Testing and Calibration Laboratory
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link} style={{ color: "white" }}>
              Last 5 Submissions
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link} style={{ color: "white" }}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Typography variant="h5" gutterBottom className={classes.title}>
        GLOBAL TESTING & RESEARCH LABORATORY
      </Typography>
      <Grid container item xs={12} spacing={3} className={classes.container}>
        
      <Grid item xs={12} sm={12}>
          <Typography variant='h6'>Job Serial No: QWERTASDFG </Typography>
        </Grid>
        <Grid container spacing={1} border={1}>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="departmentSendingSample"
              name="departmentSendingSample"
              label="Department Sending Sample:"
              fullWidth
              autoComplete="departmentSendingSample"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              required
              id="customerNameAndAddress"
              name="customerNameAndAddress"
              label="Customer Name and Address:"
              fullWidth
              autoComplete="customerNameAndAddress"
              variant="outlined"
              multiline
              rowsMax={3}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            {/* <TextField
              required
              id="receivedOn"
              name="receivedOn"
              label="Received On:"
              fullWidth
              autoComplete="received On:"
              variant="outlined"
              type="date"
            /> */}
             <TextField
                id="receivedOn"
                name="receivedOn"
                label="Received On:"
                type="date"
                defaultValue="2017-05-24"
                fullWidth
                autoComplete="received On:"
                variant="outlined"
            />

          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="jobOrderNo"
              name="jobOrderNo"
              label="Job Order No. / Ref No:"
              fullWidth
              autoComplete="jobOrderNo"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="responsibleAuthority"
              name="responsibleAuthority"
              label="Responsible Authority:"
              fullWidth
              autoComplete="Responsible Authority"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="requestForTestingOf"
              name="requestForTestingOf"
              label="Sub: Request for testing of:"
              fullWidth
              autoComplete="requestForTestingOf"
              variant="outlined"              
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="testReportReleaseDate"
              name="testReportReleaseDate"
              label="Test Report Release Date:"
              fullWidth
              autoComplete="testReportReleaseDate"
              type="date"
              defaultValue="2017-05-24"
              variant="outlined"
            />
            </Grid>
            <Grid item xs={12} sm={9}>
            <TextField
              required
              id="anyOtherSpecificRequirement"
              name="anyOtherSpecificRequirement"
              label="Any other specific requirement:"
              fullWidth
              autoComplete="anyOtherSpecificRequirement"
              variant="outlined"
              multiline
              rowsMax={3}
            />
            </Grid>
        </Grid>
       {/* <Grid item xs={12} >
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
        </Grid> */}
      </Grid>
      <br/>
      <TestPlanList name="testPlanList" />
      <ul>
              <li>Customer requirements have been completely reviewed, and lab is capable of accepting the order.</li>
              <li>In case of any ambiguity, the conflicting requirements are marked above in red and further clarification may be sought from the customer, or the job may be refused.</li>
              
        </ul>
"
    </React.Fragment>
  );
}