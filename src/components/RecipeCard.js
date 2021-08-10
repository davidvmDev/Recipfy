import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  recipeCard: {
    maxWidth: 345,
    margin: "auto",
    height: "100%",
    position: "relative",
  },
  recipeCard__infoArea: {
    marginBottom: "30px",
  },
  infoArea__media: {
    height: 140,
  },
  recipeCard__actions: {
    position: "absolute",
    bottom: 0,
  },
});

const RecipeCard = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const showRecipeDetails = () => history.push(`/recipe/${props.id}`);

  return (
    <Card className={classes.recipeCard}>
      <CardActionArea className={classes.recipeCard__infoArea}>
        <CardMedia
          className={classes.infoArea__media}
          image={props.recipeImage}
        />
         <CardMedia
          className={classes.infoArea__media}
          image={props.recipeImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.recipeName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.recipeCard__actions}>
        <Button size="small" color="primary" onClick={showRecipeDetails}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
