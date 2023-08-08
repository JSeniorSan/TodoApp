import App from "./App.jsx";
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./store/index";
export default function RootProviders() {
  return (
    <React.StrictMode>
      <Provider store={configureStore()}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
