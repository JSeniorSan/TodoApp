import { SET_FILTER } from "./filters-constants";

export const filterReducer = (state = "all", action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case SET_FILTER: {
      return action.filter;
    }
  }
};
