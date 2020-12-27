import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import logo from "../static/images/logo.png";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Navbar, Dropdown, DropdownItem } from "reactstrap";
import { ListItemText, Popper, Grow, Paper, ClickAwayListener, MenuList } from "@material-ui/core";

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
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.common.white,
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    }
  })
);

type props = {
  onClick?: () => void;
};

export default function Header(props: any) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openE2, setOpenE2] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }; 
  const handleToggle = () => {
    setOpenE2((prevOpen) => !prevOpen);
  };
  const handleCloseE2 = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpenE2(false);
  };
  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenE2(false);
    }
  }
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && openE2 === false) {
      anchorRef.current!.focus();
    }
    prevOpen.current = openE2;
  }, [openE2]);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
      style={{ backgroundColor: "#24292e" }}
    >
      <CssBaseline/>
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
        {window.location.pathname !== "/signin" && window.location.pathname !== "/signUp" && 
        <div>
          <Button
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            color="primary"
            className={classes.link}
            style={{ marginLeft: "auto", color: "white" }}
            onClick={handleToggle}
          >
            Menu
          </Button>
          <Popper open={openE2} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleCloseE2}>
                    <MenuList autoFocusItem={openE2} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                      <MenuItem onClick={handleCloseE2}>Pending Review</MenuItem>
                      <MenuItem onClick={handleCloseE2}>Last 5 Submissions</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>}
        {window.location.pathname === "/dashboard" && 
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
        </NavLink>}
        {window.location.pathname !== "/signin" && window.location.pathname !== "/signUp" && 
        <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
           classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
        </div>}
        &nbsp;
        {window.location.pathname !== "/signin" && window.location.pathname !== "/signUp" && 
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            style={{color: "white"}}>
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>}      
        {window.location.pathname === "/signin" && 
        <NavLink to="/signUp" style={{ textDecoration: 'none' }}>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
            style={{ marginLeft: "auto", color: "white" }}
          >
            Sign Up
          </Button>
        </NavLink>}
        {window.location.pathname === "/signUp" && 
        <NavLink to="/signin" style={{ textDecoration: 'none' }}>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
            style={{ marginLeft: "auto", color: "white" }}
          >
            Sign In
          </Button>
        </NavLink>}
      </Toolbar>
    </AppBar>
  );
}
