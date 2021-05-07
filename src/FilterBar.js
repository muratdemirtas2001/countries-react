function FilterBar({ dataFetched, filterByRegion }) {
  let regions = dataFetched
    .map((country) => {
      return country.region;
    })
    .filter((v, i, a) => a.indexOf(v) === i);

  console.log(regions);
  return (
    <select className="select-input" onChange={filterByRegion}>
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
