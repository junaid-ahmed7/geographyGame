"use client";

import Map from "./maps/Map";
import { GameProvider } from "../context/GameContext";

const Home = () => {
  return (
    <>
      <h1>Population Game</h1>
      <GameProvider>
        <Map />
      </GameProvider>
    </>
  );
};

export default Home;
