import Map from "./maps/Map.jsx";
import { useGameContext } from "../context/GameContext";

const Home = () => {
  const { lostGame } = useGameContext();
  console.log(lostGame, "in home");
  return (
    <>
      <h1>Population Game</h1>
      <Map />
      {lostGame && <h2>GAME OVER</h2>}
    </>
  );
};

export default Home;
