"use client";

import Home from "./components/Home";
import { useEffect } from "react";
import { GameProvider } from "./context/GameContext";

export default function App() {
  useEffect(() => {
    if (!localStorage.getItem("mapGameHighScore"))
      localStorage.setItem("mapGameHighScore", "0");
  });
  return (
    <GameProvider>
      <div className="bg-gray-800 min-h-screen">
        <Home />
      </div>
    </GameProvider>
  );
}
