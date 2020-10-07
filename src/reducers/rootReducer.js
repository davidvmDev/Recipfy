const initState = {
  isLogged: false,
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

  return state;
};

export default rootReducer;
