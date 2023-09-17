import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import { todosSlice } from "./todos/todos-slice";
import { filtersSlice } from "./filters/filters-slice";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  todo: todosSlice.reducer,
  filter: filtersSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

//

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDeafaultMiddleware) => {
    return getDeafaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger);
  },
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

export const persistor = persistStore(store);
