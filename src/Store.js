import { createStore } from "redux";

// Todos
let numberId = 0;
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "add_todo": {
      return [
        ...state,
        {
          id: ++numberId,
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
    default: {
      return state;
    }
  }
};

export const store = createStore(todosReducer);

export const todosItem = (title) => ({
  type: "add_todo",
  payload: title,
});

export const toggleTodos = (id) => ({
  type: "finished",
  id,
});
