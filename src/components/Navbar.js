import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  navBar: {
    backgroundColor: "#006159",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  nav__link: {
    textDecoration: "none",
    color: "white",
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.navBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Recipfy
        </Typography>
        {props.isLogged ? (
          <div>
            <Link to="/" className={classes.nav__link}>
              <Button onClick={props.logOutUser} color="inherit">Log Out</Button>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/" className={classes.nav__link}>
              <Button color="inherit">Login</Button>
            </Link>
            <span> | </span>
            <Link to="/signup" className={classes.nav__link}>
              <Button color="inherit">Signup</Button>
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOutUser: () => {
      dispatch({ type: "LOG_OUT_USER", logState: false });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
