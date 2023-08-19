"use client";

import Home from "./components/Home";
import { GameProvider } from "./context/GameContext";

export default function App() {
  return (
    <GameProvider>
      <div className="bg-gray-800 min-h-screen">
        <Home />
      </div>
    </GameProvider>
  );
}
