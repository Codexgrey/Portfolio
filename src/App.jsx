import About from "./components/about/About.jsx";
import Intro from "./components/intro/Intro.jsx";
import DesignList from "./components/designList/DesignList.jsx";

// rendering components
const App = () => {
  return (
      <div>
        <Intro />
        <About />
        <DesignList />
      </div>
    )
};

export default App;