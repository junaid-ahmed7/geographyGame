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
    <div className="px-2 mt-0">
      <h1 className="text-2xl font-semibold mb-4">Game Stats</h1>
      {/* <p>Lost Game: {gameState.lostGame ? "Yes" : "No"}</p> */}
      <p>Current Streak: {gameState.currentNumber}</p>
      <button
        onClick={gameState.gameReset}
        className="mt-2 hover:bg-blue-700 text-white font-semibold rounded focus:outline-none focus:shadow-outline"
      >
        Reset
      </button>
      <ul className="mt-2">
        <li>Country: {gameState.name}</li>
        <li>Population: {gameState.population}</li>
        <ul>
          Capital(s):
          {gameState.capitals.map((capital, index) => (
            <li key={index}>- {capital}</li>
          ))}
        </ul>
        {gameState.name !== "Select Country" && (
          <li className="mt-2">
            <p>
              Learn more about the{" "}
              <a
                href={`https://en.wikipedia.org/wiki/${encodeURIComponent(
                  gameState.name
                )}`}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                {gameState.officialName}
              </a>
              !
            </p>
          </li>
        )}
      </ul>
      {gameState.flag !== "" && (
        <img src={gameState.flag} alt="Country Flag" className="mt-2" />
      )}
    </div>
  );
};

export default MapGame;
