import About from "./components/about/About.jsx";
import Intro from "./components/intro/Intro.jsx";
import DesignList from "./components/designList/DesignList.jsx";
import Contact from "./components/contact/Contact.jsx";

// rendering components
const App = () => {
  return (
      <div>
        <Intro />
        <About />
        <DesignList />
        <Contact />
      </div>
    )
};

export default App;