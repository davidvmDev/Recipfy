import recipesService from "../services/recipesService";

const initState = {
  isLogged: false,
  recipes: [],
};

const rootReducer = (state = initState, action) => {
  if (action.type === "LOG_USER") {
    return {
      ...state,
      isLogged: action.logState,
    };
  }

  if (action.type === "LOG_OUT_USER") {
    return {
      ...state,
      isLogged: action.logState,
    };
  }

  if (action.type === "FETCH_RECIPES") {
    return {
      ...state,
      recipes: action.recipes,
    };
  }

  return state;
};

export default rootReducer;
