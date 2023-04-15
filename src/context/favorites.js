import { useEffect } from "react";
import { useReducer, createContext } from "react";

export const FavContext = createContext();
const initialState = () => {
  return JSON.parse(localStorage.getItem("watchlist2")) || [];
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE": {
      return [...state, action.payload];
    }
    case "TOGG_MOVIE": {
      return state.includes(action.payload)
        ? state.filter((movId) => movId !== action.payload)
        : [...state, action.payload];
    }
    default:
      return state;
  }
};

export const FavProvider = ({ children }) => {
  const value = useReducer(reducer, initialState());
  useEffect(() => {
    localStorage.setItem("watchlist2", JSON.stringify(value[0]));
  }, [value]);
  return <FavContext.Provider value={value}>{children}</FavContext.Provider>;
};
