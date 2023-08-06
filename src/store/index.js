import { createStore } from "redux";
import { rootReducer } from "./Root-reducer";
import { devToolsEnhancer } from "@redux-devtools/extension";
export const store = createStore(rootReducer, devToolsEnhancer());
