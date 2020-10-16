import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React from "react";

const RecipeListItem = (props) => {
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox edge="start" disableRipple />
      </ListItemIcon>
      {!props.ingredientDetail ? (
        <ListItemText primary={`${props.recipeStep}`} />
      ) : (
        <ListItemText primary={`${props.ingredientDetail}`} />
      )}
    </ListItem>
  );
};

export default RecipeListItem;
