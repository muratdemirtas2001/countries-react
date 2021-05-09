import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";

function CountryInfo({ dataFetched }) {
  const { id } = useParams();
  const history = useHistory();
  // console.log(id);
  // let borderCountries;

  // console.log(dataFetched);
  let newCountry = dataFetched.filter((country) => {
    return country.name === id;
  });
  // console.log(newCountry);
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
  // console.log(borders);
  return (
    <>
      <button className="country-info-button" onClick={() => history.goBack()}>
        &lt;------Back
      </button>
      <div className="country-info">
        <div className="country-image-wrapper">
          <img src={flag} alt={name} />
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
              let borderCountries = dataFetched.filter((country) => {
                return country.alpha3Code === border;
              });
              return (
                <button className="country-info-borders-button">
                  <Link className="country-info-borders-button-link"to={`/country/${borderCountries[0].name}`}>
                    {border}
                  </Link>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryInfo;

// country name native name population region sub region capital topleveldomain currencies languages...
