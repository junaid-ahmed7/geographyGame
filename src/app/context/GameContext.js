import { createContext, useContext, useReducer } from "react";
import gameReducer, { initialState } from "../reducers/gameReducers";

const GameContext = createContext(initialState);

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const gameReset = () => {
    dispatch({
      type: "RESET_GAME",
      payload: {},
    });
  };

  const countryClicked = (country) => {
    dispatch({
      type: "COUNTRY_CLICKED",
      payload: {
        name: country.cName,
        officialName: country.val[1],
        capitals: country.val[2],
        population: country.val[0],
        flag: country.val[3],
        isoCode: country.iso,
      },
    });
  };

  const value = {
    ...state,
    gameReset,
    countryClicked,
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
