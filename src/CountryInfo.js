import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";

function CountryInfo({ dataFetched }) {
  const { id } = useParams();
  const history = useHistory();
  console.log(id);

  console.log(dataFetched);
  let newCountry = dataFetched.filter((country) => {
    return country.name === id;
  });
  console.log(newCountry);
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = newCountry[0];
  console.log(borders);
  return (
    <>
    <button onClick={()=>history.goBack()}>Go back</button>
      <div className="country-info">
        <div className="country-image-wrapper">
          <img src={flag} />
        </div>
        <div className="country-detail-wrapper">
          <h1>{name}</h1>
          <div className="country-info-maingroup">
            <div className="country-info-maingroup-left">
              <p>
                <span className="country-info-label">Native Name:</span>{" "}
                {nativeName}
              </p>
              <p>
                <span className="country-info-label">Population:</span>{" "}
                {population}
              </p>
              <p>
                <span className="country-info-label">Region:</span> {region}
              </p>
              <p>
                <span className="country-info-label">Sub region:</span>{" "}
                {subregion}
              </p>
            </div>
            <div className="country-info-maingroup-right">
              <p>
                <span className="country-info-label">Top level domain:</span>{" "}
                {topLevelDomain[0]}
              </p>
              <p>
                <span className="country-info-label">Currencies:</span>{" "}
                {currencies[0].name}
              </p>
              <p>
                <span className="country-info-label">Languages:</span>{" "}
                {languages[0].name}
              </p>
            </div>
          </div>
          <div className="country-info-borders">
            <p>
              <span className="country-info-label">Borders:</span>
            </p>
            {borders.map((border) => {
              return <button>{border}</button>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryInfo;

// country name native name population region sub region capital topleveldomain currencies languages...
