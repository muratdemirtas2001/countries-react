import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import CountryCards from "./CountryCards";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";


function Home({ setDataFetched, dataFetched,lightMode }) {
  const [dataToRender, setDataToRender] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((resp) => resp.json())
      .then((data) => {
        setDataFetched(data);
        setDataToRender(data);
        setLoading(false);
      });
  }, []);

  function filterCountries(e) {
    let inputValue = e.target.value.toUpperCase();
    let filteredData = dataFetched.filter((country) => {
      return country.name.toUpperCase().includes(inputValue);
    });
    setDataToRender(filteredData);
  }

  function filterByRegion(e) {
    let selectValue = e.target.value;
    let filteredData = dataFetched.filter((country) => {
      return country.region === selectValue;
    });
    setDataToRender(filteredData);
  }
  return (
    <>
      {loading ? (
        <>
          <div className="spinner-wrapper">
            <Spinner animation="border" size="lg" className="spinner" />
            <h1>Loading</h1>
          </div>
        </>
      ) : (
        <>
          <div className="search-section-wrapper">
            <SearchBar filterCountries={filterCountries} lightMode={lightMode} />
            <FilterBar
              dataFetched={dataFetched}
              filterByRegion={filterByRegion}
              lightMode={lightMode}
            />
          </div>
          <CountryCards dataToRender={dataToRender} lightMode={lightMode} />
        </>
      )}
    </>
  );
}

export default Home;
