import About from "./components/about/About.jsx";
import Intro from "./components/intro/Intro.jsx";
import DesignList from "./components/designList/DesignList.jsx";
import DevList from "./components/devList/DevList.jsx";
import Contact from "./components/contact/Contact.jsx";
import Toggle from "./components/toggle/Toggle.jsx";


// using context API
import { useContext } from "react";
import { ThemeContext } from "./context";

// rendering components
const App = () => {
  const theme = useContext(ThemeContext);
  // accessing our initial state
  const darkMode = theme.state.darkMode;

  return (
      <div
        style={{
          // if darkmode bgc - #222, else bgc - white
          backgroundColor: darkMode ? "#222" : "white",
          // if darkMode, font-color = white 
          color: darkMode && "white",
        }}
      >
        <Toggle />
        <Intro />
        <About />
        <DevList />
        <DesignList />
        <Contact />
      </div>
    )
};

export default App;