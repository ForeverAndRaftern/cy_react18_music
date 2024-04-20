import React from "react";
import ReactDOM from "react-dom/client";
// import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import { Provider } from "react-redux";
import "normalize.css";
import "./assets/css/index.less";

import store from "./store/index.ts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
