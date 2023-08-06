import { combineReducers } from "redux";
import { filterReducer } from "./filters/filters-reducers";
import { todosReducer } from "./todos/todos-reducers";
export const rootReducer = combineReducers({
  todosReducer,
  filterReducer,
});
