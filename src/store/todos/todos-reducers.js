import { ADD_TODO, DELETE_TODO, SWITCH_TODO } from "./todos-constants";
let numberId;
// обработка экшенов для todo задач
export const todosReducer = (state = [], action) => {
  // обработка ключей для списка
  if (state.length === 0) {
    numberId = 0;
  } else {
    numberId = state.length;
    console.log(numberId);
  }

  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          id: numberId++,
          title: action.payload,
          completed: false,
        },
      ];
    }

    case DELETE_TODO: {
      return state.filter((todo) => {
        return action.id !== todo.id;
      });
    }
    case SWITCH_TODO: {
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
