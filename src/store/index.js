import { createStore } from "redux";
import { rootReducer } from "./Root-reducer";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { loadLocaleStorage, saveLocaleStorage } from "./locale-storage";
import { throttle } from "lodash";
export const configureStore = () => {
  const loadState = loadLocaleStorage();
  const store = createStore(rootReducer, loadState, devToolsEnhancer());

  store.subscribe(
    throttle(() => {
      return saveLocaleStorage({
        todosReducer: store.getState().todosReducer,
      });
    }, 1000)
  );

  return store;
};
