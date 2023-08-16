import WorldMap from "react-svg-worldmap";
import countriesDatabase from "../../database/countryDatabase.json"

function Map() {
  const data = countriesDatabase.map(country => {
    return {
        country: country.cca2, value: country.population
    }
  })

  return (
    <div className="App">
      <WorldMap
        color="red"
        title="Start by selecting the country you think is the most populous!"
        value-suffix="people"
        size="xxl"
        data={data}
        backgroundColor="black"
        borderColor="white"
      />
    </div>
  );
}

export default Map;