import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import RecipeListItem from "../components/RecipeListItem";

const useStyles = makeStyles((theme) => ({
  recipe: {
    width: "60%",
    padding: "20px",
    margin: "0 auto",
  },
  infoArea__media: {
    height: 340,
    position: "relative",
    padding: "20px",
  },
  media__title: {
    position: "absolute",
    bottom: 0,
    color: "black",
    fontSize: "40px",
    fontWeight: "600",
  },
  recipe__headerInfo: {
    height: "100px",
    gap: "5px",
    borderBottom: "0.2px solid lightgrey",
  },
  recipe__headerInfoMid: {
    height: "100px",
    gap: "5px",
    borderBottom: "0.2px solid lightgrey",
    borderLeft: "0.2px solid lightgrey",
    borderRight: "0.2px solid lightgrey",
  },
  recipe__content: {
    padding: "20px",
    gap: "30px"
  },
  recipe__contentContainer: {
    borderBottom: "0.2px solid lightgrey",
  },
}));

const Recipe = () => {
  const classes = useStyles();
  return (
    <div className={classes.recipe}>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Card>
            <CardMedia
              className={classes.infoArea__media}
              image={require("../assets/logo.png")}
            >
              <Typography
                className={classes.media__title}
                gutterBottom
                variant="h5"
                component="h2"
              >
                Nombre receta
              </Typography>
            </CardMedia>
          </Card>
        </Grid>
        <Grid container item xs={12}>
          <Grid
            className={classes.recipe__headerInfo}
            item
            container
            xs={4}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <AccessAlarmIcon color="disabled" fontSize="large" />
            <Typography variant="h6" component="h2">
              10 Minute
            </Typography>
          </Grid>
          <Grid
            className={classes.recipe__headerInfoMid}
            item
            container
            xs={4}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <AccountCircleIcon color="disabled" fontSize="large" />
            <Typography variant="h6" component="h2">
              Autor
            </Typography>
          </Grid>
          <Grid
            className={classes.recipe__headerInfo}
            item
            container
            xs={4}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <FavoriteIcon color="disabled" fontSize="large" />
            <Typography variant="h6" component="h2">
              123123
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          className={classes.recipe__content}
          direction="column"
        >
          <Typography variant="h4" component="h2">
            Ingredients
          </Typography>
          <Grid
            className={classes.recipe__contentContainer}
            container
            item
            xs={12}
            direction="column"
          >
            <List>
              <RecipeListItem />
            </List>
          </Grid>

          <Typography variant="h4" component="h2">
            Steps
          </Typography>
          <Grid
            className={classes.recipe__contentContainer}
            container
            item
            xs={12}
            direction="column"
          >
            <List>
              <RecipeListItem />
            </List>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Recipe;
