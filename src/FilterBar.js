function FilterBar({ dataFetched, filterByRegion, lightMode }) {
  let regions = dataFetched
    .map((country) => {
      return country.region;
    })
    .filter((v, i, a) => a.indexOf(v) === i);

  return (
    <select
      className={
        lightMode
          ? "select-input light-mode-element"
          : "select-input dark-mode-element"
      }
      onChange={filterByRegion}
    >
      <option value="">--Find by region--</option>
      <option value="All Regions">All Regions</option>

      {regions.map((region) => {
        return (
          <option key={region} value={region}>
            {region}
          </option>
        );
      })}
    </select>
  );
}

export default FilterBar;
