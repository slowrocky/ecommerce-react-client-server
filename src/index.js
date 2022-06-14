import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import App from "./components/App";
import rootReducer from "./store/rootReducer";
import "./index.css";

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
reportWebVitals(console.log);
