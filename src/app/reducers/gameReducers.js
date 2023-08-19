import { formatPopulation } from "../../../utils/utilFunctions";
import sortedPopulations from "../../../database/sortedByPopulation";

export const initialState = {
  currentNumber: 0,
  lostGame: false,
  name: "Select Country",
  officialName: "Select Country",
  capitals: [],
  population: "0",
  flag: "",
  isoCode: "",
  gameReset: () => {},
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "RESET_GAME":
      console.log("RESET_GAME");

      return {
        ...initialState,
      };
    case "COUNTRY_CLICKED":
      console.log("COUNTRY_CLICKED");
      return sortedPopulations[state.currentNumber][0] ===
        action.payload.isoCode
        ? {
            ...state,
            name: action.payload.name,
            officialNamename: action.payload.officialName,
            capitals: action.payload.capitals,
            population: formatPopulation(action.payload.population),
            flag: action.payload.flag,
            isoCode: action.payload.iso,
            currentNumber: state.currentNumber + 1,
          }
        : {
            ...state,
            lostGame: true,
          };
    default:
      throw new Error(`No case for type ${type} found in gameReducer.`);
  }
};

export default gameReducer;
