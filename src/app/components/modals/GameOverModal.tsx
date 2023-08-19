import { useEffect } from "react";
import React from "react";
import ReactPortal from "../../portals/GameOverPortal";
import { useGameContext } from "@/app/context/GameContext";

interface GameOverModalProps {
  children?: any;
  isOpen: Boolean;
  handleClose: () => void;
}

const GameOverModal = ({
  children,
  isOpen,
  handleClose,
}: GameOverModalProps) => {
  const encouragingMessages = [
    "Don't give up, lets go again!.",
    "You did great! Keep trying!",
    "Every attempt is a step towards success.",
    "You've got this! Keep challenging yourself.",
    "Believe in yourself! Success is just around the corner.",
  ];

  const gameState = useGameContext();
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => {
      e.key === "Escape" ? handleClose() : null;
    };
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return (): void => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-40 bg-red-400 bg-opacity-75">
        <div className="bg-emerald p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Wrong Answer :( </h2>
          <p className="text-lg">You got {gameState.currentNumber} right!</p>
          <button
            onClick={handleClose}
            className="mt-4 px-4 py-2 bg-emerald-400 text-white rounded-md hover:bg-emerald-800"
          >
            {encouragingMessages[Math.floor(Math.random() * 5)]}
          </button>
        </div>
      </div>
    </ReactPortal>
  );
};

export default GameOverModal;
