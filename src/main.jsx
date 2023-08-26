import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
