import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import App from "./components/App";
import rootReducer from "./store/rootReducer";
import "./index.css";

//const store = '';

ReactDOM.render(
  <StrictMode>
    
      <App />
    
  </StrictMode>,
  document.getElementById("root")
);
reportWebVitals(console.log);
