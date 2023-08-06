import App from "./App.jsx";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/index";
export default function RootProviders() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
