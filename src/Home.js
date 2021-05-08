import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import CountryCards from "./CountryCards";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

// let newData = [];

function Home({ setDataFetched, dataFetched }) {
  // const [dataFetched, setDataFetched] = useState([]);
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
    // let filteredData = newData.filter((country) => {
    let filteredData = dataFetched.filter((country) => {
      return country.name.toUpperCase().includes(inputValue);
    });
    // setData(filteredData);
    setDataToRender(filteredData);
  }

  function filterByRegion(e) {
    // console.log(newData)
    let selectValue = e.target.value;
    let filteredData = dataFetched.filter((country) => {
      return country.region === selectValue;
    });
    // console.log(filteredData)
    setDataToRender(filteredData);
    // console.log(data)
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
            <SearchBar filterCountries={filterCountries} />
            <FilterBar
              dataFetched={dataFetched}
              filterByRegion={filterByRegion}
            />
          </div>
          <CountryCards dataToRender={dataToRender} />
        </>
      )}
    </>
  );
}

export default Home;
