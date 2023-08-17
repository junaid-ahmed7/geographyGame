"use client";

import Home from "./components/Home";
import { GameProvider } from "./context/GameContext";

export default function App() {
  return (
    <GameProvider>
      <Home />
    </GameProvider>
  );
}
