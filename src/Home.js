import "./App.css";
import { useState, useEffect } from "react";
import MenuBar from "./MenuBar";
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
    console.log("use efeect called");
    fetch("https://restcountries.eu/rest/v2/all")
      .then((resp) => resp.json())
      .then((data) => {
        setDataFetched(data);
        // newData = [...data];
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
      {/* <MenuBar /> */}
      <div className="search-section-wrapper">
        <SearchBar filterCountries={filterCountries} />
        <FilterBar dataFetched={dataFetched} filterByRegion={filterByRegion} />
        {/* <Spinner  animation="border" className="spinner, spinner-location"/> */}
      </div>
      {loading ? (
        <Spinner animation="border" className="spinner, spinner-location" />
      ) : (
        <CountryCards dataToRender={dataToRender} />
      )}
    </>
  );
}

export default Home;
