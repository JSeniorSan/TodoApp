import App from "./App.jsx";
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./store/index";
// сущности роутинга
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function RootProviders() {
  return (
    <React.StrictMode>
      {/* подключение редакса */}
      <Provider store={configureStore()}>
        {/* подключение роутинга */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              {/* задаем параметры роутинга */}
              <Route path=":filter" element={<App />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}
