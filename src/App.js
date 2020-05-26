import React from "react";
import "./styles.css";

import {  Route,BrowserRouter } from "react-router-dom";


import Home from "./components/Home/Home";
import Case from "./components/Case/Case";

import Officer from "./components/Officer/Officer";
import OfficerList from "./components/Officer/OfficerList";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
        <Home />
        <Route exact path="/submit" component={Case}></Route>
        <Route exact path="/register" component={Officer}></Route>
        <Route exact path="/list" component={OfficerList}></Route>
        


        </div>
        </BrowserRouter>
    </div>
  );
}
