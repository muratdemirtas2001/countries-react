import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import CountryInfo from "./CountryInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuBar from "./MenuBar";

function App() {
  const [dataFetched, setDataFetched] = useState([]);
  return (
    <>
      <MenuBar />

      <Router>
        <div className="main">
          <div className="content-wrapper">
            <Switch>
              <Route exact path="/">
                <Home
                  setDataFetched={setDataFetched}
                  dataFetched={dataFetched}
                />
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
        </div>
      </Router>
    </>
  );
}

export default App;
