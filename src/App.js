import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import CountryInfo from "./CountryInfo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuBar from "./MenuBar";

function App() {
  const [dataFetched, setDataFetched] = useState([]);
  return (
    <>
      <MenuBar />

      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home setDataFetched={setDataFetched} dataFetched={dataFetched} />
            </Route>
            <Route path="/about">
              <Home />
            </Route>
            <Route path="/dashboard">
              <Home />
            </Route>
            <Route path="/country/:id">
              <CountryInfo dataFetched={dataFetched} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
