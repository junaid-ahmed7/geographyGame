"use client";

import Home from "./components/Home";
import { GameProvider } from "./context/GameContext";

export default function App() {
  if (!localStorage.getItem("mapGameHighScore")) localStorage.setItem("mapGameHighScore", "0")
  console.log(localStorage.getItem("mapGameHighScore"))
  return (
    <GameProvider>
      <div className="bg-gray-800 min-h-screen">
        <Home />
      </div>
    </GameProvider>
  );
}
