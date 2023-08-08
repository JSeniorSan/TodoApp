export const selectTodosReducer = (state) => state.todosReducer;
export const selectFilter = (state, filter) => {
  switch (filter) {
    // проверка для выбора фильтра
    default: {
      return state.todosReducer;
    }

    case "all": {
      console.log("1");

      return state.todosReducer;
    }
    case "active": {
      console.log("2");
      return state.todosReducer.filter((obj) => !obj.completed);
    }
    case "completed": {
      console.log("3");
      return state.todosReducer.filter((obj) => obj.completed);
    }
  }
};
