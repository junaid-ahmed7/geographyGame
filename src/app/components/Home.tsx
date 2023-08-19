import Map from "./maps/Map.jsx";
import { useGameContext } from "../context/GameContext";
import GameOverModal from "./modals/GameOverModal";
import Footer from "./Footer";

const Home = () => {
  const { lostGame, gameReset } = useGameContext();
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-800 py-16 px-6">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
          GeoGame
        </h1>
        <h2 className="mb-6 text-lg font-normal lg:text-xl sm:px-8 xl:px-48 text-gray-400">
          Make learning <span className="text-emerald-400">Geography</span> fun!
        </h2>
        <h3 className="mb-0 text-4xl font-extrabold tracking-tight md:text-5xl text-white">
          Population Mode
        </h3>
        <p className="mt-0 mb-4 font-extralight text-xs">select the countries with the highest population, in decreasing order</p>
        <h4 className="text-xl font-semibold text-gray-300 mb-3">
          More modes coming soon!
        </h4>
      </div>
      <Map />
      {lostGame && <GameOverModal isOpen={lostGame} handleClose={gameReset} />}
      <Footer />
    </>
  );
};

export default Home;
