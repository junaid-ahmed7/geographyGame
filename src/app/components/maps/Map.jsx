import React, { useMemo, useCallback, useState, useEffect } from "react";
import WorldMap from "react-svg-worldmap";
import countriesDatabase from "../../../../database/countryDatabase.json";
import MapGame from "./MapGame.jsx";

function Map() {
  // Memoize the data array to prevent unnecessary re-renders
  const data = useMemo(() => {
    console.log("ITERATING OVER MASSIVE ARRAY");
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
    <div className="flex mx-5">
      <figure className="w-3/4 mr-4">
        <WorldMap
          color="black"
          title=""
          value-suffix="people"
          size="responsive"
          data={data}
          onClickFunction={countryClicked}
          backgroundColor="rgb(135, 206, 235)"
          borderColor="white"
          tooltipTextFunction={noText}
        />
      </figure>
      <div className="w-1/4">
        <MapGame clickedCountry={clickedCountry} />
      </div>
    </div>
  );
}

export default React.memo(Map);
