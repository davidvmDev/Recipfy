import { Button, Card, TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  login: {
    height: "60vh",
    display: "flex",
    justifyContent: "center",
  },
  login__title: {
      fontSize: "2rem"
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

const Login = () => {
  const classes = useStyles();
  return (
    <Card className={classes.login__card} boxShadow={0}>
      <h2 className={classes.login__title}>Login</h2>
      <form autoComplete="off" className={classes.login__form}>
        <TextField
          className={classes.form__input}
          label="Email"
          variant="outlined"
          type="email"
        />
        <TextField
          className={classes.form__input}
          label="Password"
          variant="outlined"
          type="password"
        />
        <Button
          className={classes.form__button}
          variant="contained"
          color="#006159"
          type="submit"
        >
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Login;
