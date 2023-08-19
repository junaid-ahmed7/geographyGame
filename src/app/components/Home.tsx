import Map from "./maps/Map.jsx";
import { useGameContext } from "../context/GameContext";
import GameOverModal from "./modals/GameOverModal";

const Home = () => {
  const { lostGame, gameReset } = useGameContext();
  return (
    <>
      <h1>Population Game</h1>
      <Map />
      {lostGame && <GameOverModal isOpen={lostGame} handleClose={gameReset} />}
    </>
  );
};

export default Home;
