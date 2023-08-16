export const initialState = {
  currentNumber: 0,
  lostGame: false,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "LOST_GAME":
      console.log("LOST_GAME", action);

      return {
        ...state,
        lostGame: action.payload,
      };
    default:
      throw new Error(`No case for type ${type} found in gameReducer.`);
  }
};

export default gameReducer;
