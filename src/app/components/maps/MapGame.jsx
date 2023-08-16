import { useGameContext } from "../../context/GameContext";
import { useState, useEffect } from "react";
import { formatPopulation } from "../../../../utils/utilFunctions";

const MapGame = ({ clickedCountry }) => {
  const { lostGame, gameOver } = useGameContext();

  const [country, setCountry] = useState({
    name: "Select Country",
    population: "0",
  });

  useEffect(() => {
    if (clickedCountry) {
      setCountry({
        name: clickedCountry.cName,
        population: formatPopulation(clickedCountry.val[0]) + " people!",
      });
    }
  }, [clickedCountry]);

  return (
    <>
      <p>Lost Game: {lostGame ? "Yes" : "No"}</p>
      <button onClick={gameOver}>Lost</button>
      <ul>
        <li>Country: {country.name}</li>
        <li>population: {country.population}</li>
      </ul>
    </>
  );
};

export default MapGame;
