import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ChipInput from "material-ui-chip-input";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  search: {
    width: "100%",
    padding: "20px",
  },
  search__logo: {
    display: "block",
    margin: "0 auto",
    height: "200px",
    width: "25%",
  },
  search__input: {
    display: "block",
    margin: "0 auto",
    width: "40%",
  },
  search__button: {
    minWidth: "10%",
    minHeight: " 40px",
    backgroundColor: "#00575A",
    color: "white",
    margin: "0 auto",
    marginTop: "50px"
  },
}));

const Search = () => {
  const classes = useStyles();
  const [ingredients, setIngredients] = useState([]);

  return (
    <div className={classes.search}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <img
            className={classes.search__logo}
            src={require("../assets/logo.png")}
            alt="logo"
          />
        </Grid>
        <Grid container alignContent="center">
          <Grid item xs={12}>
            <ChipInput
              className={classes.search__input}
              defaultValue={[]}
              placeholder={
                ingredients.length > 0
                  ? ""
                  : "Give us ingredients and we will show you recipes!"
              }
              onChange={(chips) => setIngredients([...chips])}
            />
          </Grid>

          <Button
            className={classes.search__button}
            variant="contained"
            type="submit"
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;
