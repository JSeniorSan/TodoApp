import App from "./App.jsx";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/index.js";
// сущности роутинга
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function RootProviders() {
  return (
    <React.StrictMode>
      {/* подключение редакса */}
      <Provider store={store}>
        {/* подключение роутинга */}
        <BrowserRouter>
          <PersistGate loading={null} persistor={persistor}>
            <Routes>
              <Route path="/" element={<App />}>
                {/* задаем параметры роутинга */}
                <Route path=":filter" element={<App />} />
              </Route>
            </Routes>
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}
