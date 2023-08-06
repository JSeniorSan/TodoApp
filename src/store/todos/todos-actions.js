import { ADD_TODO, DELETE_TODO, SWITCH_TODO } from "./todos-constants";

export const todosItem = (title) => ({
  type: ADD_TODO,
  payload: title,
});

export const deleteItem = (id) => ({
  type: DELETE_TODO,
  id,
});

export const switchTodos = (id) => ({
  type: SWITCH_TODO,
  id,
});
