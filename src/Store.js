import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

// Todos
let numberId = 0;
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "add_todo": {
      return [
        ...state,
        {
          id: numberId++,
          title: action.payload,
          completed: false,
        },
      ];
    }
    case "finished": {
      return state.map((parametr) => {
        if (parametr.id === action.id) {
          return {
            ...parametr,
            completed: !parametr.completed,
          };
        }
        return parametr;
      });
    }

    case "delete_todo": {
      return state.filter((todo) => {
        return action.id !== todo.id;
      });
    }
    case "switch_todos": {
      const arrTodos = [...state].map((todo) => {
        if (action.id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return {
            ...todo,
          };
        }
      });

      return arrTodos;
    }
    default: {
      return state;
    }
  }
};

export const store = createStore(todosReducer, devToolsEnhancer());

// action creators
export const todosItem = (title) => ({
  type: "add_todo",
  payload: title,
});

export const toggleTodos = (id) => ({
  type: "finished",
  id,
});

export const deleteItem = (id) => ({
  type: "delete_todo",
  id,
});

export const switchTodos = (id) => ({
  type: "switch_todos",
  id,
});
