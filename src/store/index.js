import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import { rootReducer } from "./Root-reducer";
import { todosSlice } from "./todos/todos-slice";
import { filtersSlice } from "./filters/filters-slice";

export const store = configureStore({
  reducer: {
    todo: todosSlice.reducer,
    filter: filtersSlice.reducer,
  },
  devTools: true,
  middleware: (getDeafaultMiddleware) => getDeafaultMiddleware().concat(logger),
  preloadedState: {
    todo: [
      {
        id: 1,
        title: "hi",
        completed: false,
      },
    ],
  },
});
