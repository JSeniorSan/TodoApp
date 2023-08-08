import { combineReducers } from "redux";
import { todosReducer } from "./todos/todos-reducers";
export const rootReducer = combineReducers({
  todosReducer,
});
