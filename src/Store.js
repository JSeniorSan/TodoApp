import { createStore } from "redux";

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

    // должен происходить поиск элемента с индексом, кторый нужно вырезать и дальшейшим возвратом порядкового индекса элемента в массиве
    case "delete_todo": {
      return state.filter((todo) => {
        return action.id !== todo.id;
      });

      // let item = [...state];

      //   state.forEach((parametr) => {
      //     if (action.id === parametr.id) {
      //       const delItem = [...state].splice(action.id - 1, 1);
      //       item = delItem;
      //       numberId = action.id - 2;
      //     }
      //     return;
      //   });

      //   for (let item = 0; item < state.length; item++) {
      //     if (action.id === state[item].id) {
      //       const copyArray = [...state];
      //       copyArray.splice(item.id, 1);
      //       console.log(copyArray);
      //       item = copyArray;
      //       console.log(item);

      //       return;
      //     }
      //   }
      //   return item;
      //   console.log(item);

      //   return item;
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

export const deleteItem = (id) => ({
  type: "delete_todo",
  id,
});
