import React, { useEffect } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";

import Header from "./Header/Header";

function App() {
  return (
    <div style={{flex: 1}}>
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
