function SearchBar({ filterCountries }) {
  return (
    <>
      <input className="search-input" onChange={filterCountries}></input>
    </>
  );
}

export default SearchBar;
