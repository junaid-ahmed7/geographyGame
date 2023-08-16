import { createContext, useContext, useReducer } from "react";
import gameReducer, { initialState } from "../reducers/gameReducers";

const GameContext = createContext(initialState);

// Define the GameProvider
const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const gameOver = () => {
    dispatch({
      type: "LOST_GAME",
      payload: {
        lostGame: false,
      },
    });
  };

  const value = {
    ...state,
    gameOver,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};

export { GameProvider, useGameContext };
