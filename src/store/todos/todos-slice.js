import { createSlice, nanoid, createAction } from "@reduxjs/toolkit";

export const resetState = createAction("@@todo/reset_state");

export const todosSlice = createSlice({
  name: "@@todos",
  initialState: [],
  reducers: {
    add_todo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title) => ({
        payload: {
          id: nanoid(),
          title: title,
          completed: false,
        },
      }),
    },
    delete_todo: (state, action) => {
      return state.filter((todo) => {
        return action.payload !== todo.id;
      });
    },
    switch_todo: (state, action) => {
      const todo = state.find((todo) => {
        return todo.id === action.payload;
      });
      console.log(todo);
      todo.completed = !todo.completed;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetState, (state, action) => {
      return [];
    });
  },
});

export const selectTodosReducer = (state) => state.todosReducer;
export const selectFilter = (state, filter) => {
  switch (filter) {
    // проверка для выбора фильтра
    default: {
      return state;
    }

    case "all": {
      console.log("1");

      return state;
    }
    case "active": {
      console.log("2");
      return state.filter((obj) => !obj.completed);
    }
    case "completed": {
      console.log("3");
      return state.filter((obj) => obj.completed);
    }
  }
};

export const { add_todo, delete_todo, switch_todo } = todosSlice.actions;
export const todoReducer = todosSlice.reducer;
