import Country from "./Country";
function CountryCards({ dataToRender }) {
  return (
    <>
      <div className="cards-wrapper">
        {dataToRender.map((country) => {
          return <Country key={country.numericCode} country={country} />;
        })}
      </div>
    </>
  );
}
export default CountryCards;
