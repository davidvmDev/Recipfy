import { Checkbox, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";

const RecipeListItem = () => {
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox edge="start" disableRipple />
      </ListItemIcon>
      <ListItemText primary="Ingredient" />
    </ListItem>
  );
};

export default RecipeListItem;
