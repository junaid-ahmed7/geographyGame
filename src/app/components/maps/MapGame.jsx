import { useGameContext } from "../../context/GameContext";
import { useEffect } from "react";

const MapGame = ({ clickedCountry }) => {
  let highScore = "0";
  if (typeof window !== "undefined") {
    highScore = localStorage.getItem("mapGameHighScore") || "0";
  }
  const gameState = useGameContext();

  useEffect(() => {
    if (clickedCountry) {
      gameState.countryClicked(clickedCountry);
    }
  }, [clickedCountry]);

  useEffect(() => {
    if (gameState.currentNumber > Number(highScore)) {
      localStorage.setItem(
        "mapGameHighScore",
        gameState.currentNumber.toString()
      );
    }
  }, [gameState.currentNumber]);
  return (
    <div className="px-2 mt-0">
      <h1 className="text-2xl font-semibold mb-4">Game Stats</h1>
      {/* <p>Lost Game: {gameState.lostGame ? "Yes" : "No"}</p> */}
      <p>Current Streak: {gameState.currentNumber}</p>
      <p>
        Lifetime Highscore:{" "}
        {gameState.currentNumber > Number(highScore)
          ? gameState.currentNumber
          : Number(highScore)}
      </p>
      {/* <button
        onClick={gameState.gameReset}
        className="mt-2 hover:bg-blue-700 text-white font-semibold rounded focus:outline-none focus:shadow-outline"
      >
        Reset
      </button> */}
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
