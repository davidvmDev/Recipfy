import axios from "axios";
const appKey = "50365c74e6ac48a6bd35c6c3366aa451";
const recipes = {};

recipes.getRecipesByIngredients = async (ingredients) => {
  let ingredientsQuery = "";
  try {
    await ingredients.forEach(
      (item) => (ingredientsQuery = ingredientsQuery + item + ", ")
    );
    ingredientsQuery = ingredientsQuery.replace(/, $/, "");

    const request = {
      method: "GET",
      params: {
        apiKey: appKey,
        ingredients: ingredientsQuery,
      },
      url: `https://api.spoonacular.com/recipes/findByIngredients`,
    };

    const response = await axios(request);
    return response.data;
  } catch (err) {
    const message = err.response;
    if (!message) throw new Error(err.message);
    else throw new Error(message.data.error);
  }
};

//Obtencion de la info de la receta mediante id, includeNutrition en false
recipes.getRecipeById = async (recipeId) => {
  let ingredientQuery = "";

  try {
    const request = {
      method: "GET",
      params: {
        apiKey: appKey,
        includeNutrition: false,
      },
      url: `https://api.spoonacular.com/recipes/${recipeId}/information`,
    };

    const response = await axios(request);
    return response.data;
  } catch (err) {
    const message = err.response;
    if (!message) throw new Error(err.message);
    else throw new Error(message.data.error);
  }
};

export default recipes;
