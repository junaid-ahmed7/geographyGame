import React, { useMemo, useCallback, useState } from "react";
import WorldMap from "react-svg-worldmap";
import countriesDatabase from "../../../../database/countryDatabase.json";
import MapGame from "./MapGame.jsx";

function Map() {
  // Memoize the data array to prevent unnecessary re-renders
  const data = useMemo(() => {
    console.log("ITERATING OVER MASSIVE ARRAY")
    return countriesDatabase.map((country) => {
      return {
        country: country.cca2,
        value: [
          country.population,
          country.name.official,
          country.capital,
          country.flags.png,
        ],
      };
    });
  }, []);

  const [clickedCountry, setClickedCountry] = useState(null);

  // Memoize the countryClicked function
  const countryClicked = useCallback((data) => {
    setClickedCountry({
      cName: data.countryName,
      iso: data.countryCode,
      val: data.countryValue,
    });
  }, []);

  const noText = () => {
    return "";
  };

  return (
    <div className="App">
      <WorldMap
        color=""
        title="Start by selecting the country you think is the most populous!"
        value-suffix="people"
        size="xxl"
        data={data}
        onClickFunction={countryClicked}
        backgroundColor="black"
        borderColor="white"
        tooltipTextFunction={noText}
      />
      <MapGame clickedCountry={clickedCountry} />
    </div>
  );
}

export default React.memo(Map);
