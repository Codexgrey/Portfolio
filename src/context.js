// context API to toggle modes in all components
import { createContext, useReducer } from "react";

// using react context API to initialize our ThemeContext
export const ThemeContext = createContext();

const INITIAL_STATE = { darkMode: false };

// reducer to switch states/modes
const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      // if true, state = darkmode(false), else state = !state.darkmode
      return { darkMode: !state.darkMode }; 

    default:
      return state;
  }
};

// ThemeProvider exporting our props
export const ThemeProvider = (props) => {
  // using useReducer hook
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  return (
    // passing props for export
    <ThemeContext.Provider value={{state, dispatch}}>
      {props.children}
    </ThemeContext.Provider>
  );
};