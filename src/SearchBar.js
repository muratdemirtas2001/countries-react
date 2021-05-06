function SearchBar({ filterCountries }) {
  return (
    <>
      <input onChange={filterCountries}></input>
    </>
  );
}

export default SearchBar;
