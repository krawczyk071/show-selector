import { useEffect } from "react";
import { useReducer, createContext } from "react";

export const FavContext = createContext();
const initialState = () => {
  return JSON.parse(localStorage.getItem("watchlist2")) || [];
};

export const FavProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState());

  useEffect(() => {
    localStorage.setItem("watchlist2", JSON.stringify(state));
  }, [state]);

  return (
    <FavContext.Provider value={[state, dispatch]}>
      {children}
    </FavContext.Provider>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE": {
      return [...state, action.payload];
    }
    case "TOGG_MOVIE": {
      // return state.includes(action.payload)
      return state.some((movie) => movie.id === action.payload.id)
        ? state.filter((movie) => movie.id !== action.payload.id)
        : [...state, action.payload];
    }
    default:
      return state;
  }
};
