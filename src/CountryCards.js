import Country from "./Country";
function CountryCards({ dataToRender, lightMode }) {
  return (
    <>
      <div className="cards-wrapper">
        {dataToRender.map((country) => {
          return (
            <Country
              key={country.numericCode}
              country={country}
              lightMode={lightMode}
            />
          );
        })}
      </div>
    </>
  );
}
export default CountryCards;
