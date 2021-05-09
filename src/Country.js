import React from "react";
import { Link } from "react-router-dom";

function Country({ country }) {
  return (
    <Link to={`/country/${country.name}`}>
      See More
      <div className="country-wrapper">
        <img src={country.flag} alt={country.name}></img>
        <h3>{country.name}</h3>
        <div className="info wrapper">
          <h5>Population : {country.population}</h5>
          <h5>Region : {country.region}</h5>
          <h5>Capital : {country.capital}</h5>
        </div>
        <Link to={`/country/${country.name}`}>See More</Link>
      </div>
      <span className="card" style={{ display: "block" }}></span>
    </Link>
  );
}
export default Country;

//population region capital
