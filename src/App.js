import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import CountryInfo from "./CountryInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuBar from "./MenuBar";

function App() {
  const [dataFetched, setDataFetched] = useState([]);
  const [lightMode, setLightMode] = useState(true);
  function changeMode() {
    console.log("change");
    setLightMode(!lightMode);
  }
  return (
    <>
      <MenuBar changeMode={changeMode} lightMode={lightMode} />

      <Router>
        <div className="main">
          <div
            className={
              lightMode
                ? "content-wrapper light-mode-background"
                : "content-wrapper dark-mode-background"
            }
          >
            <Switch>
              <Route exact path="/">
                <Home
                  setDataFetched={setDataFetched}
                  dataFetched={dataFetched}
                  lightMode={lightMode}
                />
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
