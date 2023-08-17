import { useGameContext } from "../../context/GameContext";
import { useEffect } from "react";

const MapGame = ({ clickedCountry }) => {
  const gameState = useGameContext();

  useEffect(() => {
    if (clickedCountry) {
      gameState.countryClicked(clickedCountry);
    }
  }, [clickedCountry]);

  return (
    <>
      <p>Lost Game: {gameState.lostGame ? "Yes" : "No"}</p>
      <p>current streak: {gameState.currentNumber}</p>
      <button onClick={gameState.gameReset}>Reset</button>
      <ul>
        <li>Country: {gameState.name}</li>
        <li>Official Name: {gameState.officialName}</li>
        <li>Population: {gameState.population}</li>
        <ul>
          Capital(s):
          {gameState.capitals.map((capital, index) => {
            return <li key={index}> - {capital}</li>
          })}
        </ul>
      </ul>
      <img src={gameState.flag}></img>
    </>
  );
};

export default MapGame;
