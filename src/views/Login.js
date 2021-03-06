import { Button, Card, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { auth } from "../services/firebase";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  login: {
    height: "60vh",
    display: "flex",
    justifyContent: "center",
  },
  login__title: {
    fontSize: "2rem",
  },
  login__card: {
    padding: "20px",
    width: "400px",
    height: "60%",
    margin: "auto",
    marginTop: "60px",
    justifyContent: "center",
    backgroundColor: "#EEEEEE",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  login__form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form__input: {
    margin: theme.spacing(2),
    width: "90%",
    backgroundColor: "white",
    color: "black",
    borderRadius: "50px",
    [`& fieldset`]: {
      borderRadius: "50px",
    },
  },
  form__button: {
    minWidth: "40%",
    minHeight: " 40px",
    backgroundColor: "#00575A",
    color: "white",
    marginTop: theme.spacing(2),
  },
}));

const Login = (props) => {
  const classes = useStyles();

  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (event) => {
    event.preventDefault();

    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      if (!user || !user.user) {
        return;
      }
      props.logUser();
      history.replace("/search");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Card className={classes.login__card}>
      <h2 className={classes.login__title}>Login</h2>
      <form
        autoComplete="off"
        className={classes.login__form}
        onSubmit={loginUser}
      >
        <TextField
          className={classes.form__input}
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className={classes.form__input}
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className={classes.form__button}
          variant="contained"
          type="submit"
        >
          Login
        </Button>
      </form>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logUser: () => {
      dispatch({ type: "LOG_USER", logState: true });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
