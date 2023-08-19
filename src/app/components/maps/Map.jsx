import React, { useMemo, useCallback, useState } from "react";
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

  function oceans(width) {
    const labels = [
      {
        label: "Atlantic",
        x: 0.37 * width,
        y: 0.39 * width,
        style: { fill: "blue" },
      },
      {
        label: "Indian",
        x: 0.69 * width,
        y: 0.57 * width,
        style: { fill: "blue" },
      },
      {
        label: "Southern",
        x: 0.45 * width,
        y: 0.69 * width,
        style: { fill: "blue" },
      },
      {
        label: "Pacific",
        x: 0.083 * width,
        y: 0.48 * width,
        style: { fill: "blue" },
      },
      {
        label: "Arctic",
        x: 0.75 * width,
        y: 0.058 * width,
        style: { fill: "blue" },
      },
    ];
    if (width < 550) {
      return labels.map((label) => ({
        ...label,
        style: { ...label.style, fontSize: "70%" },
      }));
    }
    return labels;
  }

  const noText = () => {
    return "";
  };

  return (
      <div className="flex mx-5">
        <figure className="w-3/5 mr-4">
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
            textLabelFunction={oceans}
          />
        </figure>
        <div className="w-2/5">
          <MapGame clickedCountry={clickedCountry} />
        </div>
      </div>
  );
}

export default React.memo(Map);
