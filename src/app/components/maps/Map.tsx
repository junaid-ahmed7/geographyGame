import WorldMap from "react-svg-worldmap";
import countriesDatabase from "../../../../database/countryDatabase.json";
import { useGameContext } from "../../context/GameContext";

function Map() {
  const { lostGame, gameOver } = useGameContext();
  const data = countriesDatabase.map((country) => {
    return {
      country: country.cca2,
      value: country.population,
    };
  });

  return (
    <div className="App">
      <p>Lost Game: {lostGame ? "Yes" : "No"}</p>
      <button onClick={gameOver}>Lost</button>
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
