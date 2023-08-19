import { useEffect } from "react";
import React from "react";
import ReactPortal from "../../portals/GameOverPortal";

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
      <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-40 bg-neutral-800 bg-opacity-75">
        <div className="bg-emerald p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Game Over</h2>
          <p className="text-lg">You lost the game!</p>
          <button
            onClick={handleClose}
            className="mt-4 px-4 py-2 bg-neutral-500 text-white rounded-md hover:bg-neutral-600"
          >
            Try Try Again!
          </button>
        </div>
      </div>
    </ReactPortal>
  );
};

export default GameOverModal;
