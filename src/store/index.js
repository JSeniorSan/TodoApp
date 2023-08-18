import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { rootReducer } from "./Root-reducer";
import {
  devToolsEnhancer,
  composeWithDevTools,
} from "@redux-devtools/extension";
import { loadLocaleStorage, saveLocaleStorage } from "./locale-storage";
import { throttle } from "lodash";
export const configureStore = () => {
  const middleware = [];
  if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
  }

  const loadState = loadLocaleStorage();
  const store = createStore(
    rootReducer,
    loadState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  // запись нового значения стора при его изменении, но с орграничением записи в 1с
  store.subscribe(
    throttle(() => {
      return saveLocaleStorage({
        // обновление состояния стора только todo параметров, без состояний фильтров
        todosReducer: store.getState().todosReducer,
      });
    }, 1000)
  );

  return store;
};
