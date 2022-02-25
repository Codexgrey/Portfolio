import About from "./components/about/About.jsx";
import Intro from "./components/intro/Intro.jsx";
import DesignList from "./components/designList/DesignList.jsx";
import Contact from "./components/contact/Contact.jsx";
import Toggle from "./components/toggle/Toggle.jsx";

// rendering components
const App = () => {
  return (
      <div>
        <Toggle />
        <Intro />
        <About />
        <DesignList />
        <Contact />
      </div>
    )
};

export default App;