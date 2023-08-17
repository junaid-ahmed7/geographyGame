import { formatPopulation } from "../../../utils/utilFunctions";

export const initialState = {
  currentNumber: 0,
  lostGame: false,
  name: "Select Country",
  officialName: "Select Country",
  capitals: [],
  population: "0",
  flag: "",
  isoCode: "",
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "LOST_GAME":
      console.log("LOST_GAME", action);

      return {
        ...state,
        lostGame: action.payload,
      };
    case "COUNTRY_CLICKED":
      console.log("COUNTRY_CLICKED", action);

      return {
        ...state,
        name: action.payload.name,
        officialNamename: action.payload.officialName,
        capitals: action.payload.capitals,
        population: formatPopulation(action.payload.population),
        flag: action.payload.flag,
        isoCode: action.payload.iso,
        currentNumber: state.currentNumber + 1,
      };
    default:
      throw new Error(`No case for type ${type} found in gameReducer.`);
  }
};

export default gameReducer;
