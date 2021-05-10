import React from "react";
import { Link } from "react-router-dom";

function Country({ country,lightMode }) {
  return (
    <div
      className={
        lightMode
          ? "country-wrapper light-mode-element"
          : "country-wrapper dark-mode-element"
      }
    >
      <Link className={lightMode?"country-link-light-mode": "country-link-dark-mode"} to={`/country/${country.name}`}>
        <img src={country.flag} alt={country.name}></img>
        <h3>{country.name}</h3>
        <div className="info-wrapper">
          <h5>Population : {country.population}</h5>
          <h5>Region : {country.region}</h5>
          <h5>Capital : {country.capital}</h5>
        </div>
        {/* <Link to={`/country/${country.name}`}>See More</Link> */}
      </Link>
    </div>
  );
}
export default Country;

//population region capital
