import React from "react";
import { Link, useParams } from "react-router-dom";

function CountryInfo({ dataFetched }) {
  const { id } = useParams();
  console.log(id);

  console.log(dataFetched);
  let newCountry = dataFetched.filter((country) => {
    return country.name === id;
  });
  console.log(newCountry);
  return (
    <>
      <h1>hello from country info id is {id}</h1>
      <img src={newCountry[0].flag} />
      <p>Region {newCountry[0].region}</p>
      <p>Sub Region {newCountry[0].subregion}</p>
    </>
  );
}

export default CountryInfo;
