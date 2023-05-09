import Nav from "./Nav";
import Landing from "./Landing";
import About from "./About";
import Projects from "./Projects";
import Services from "./Services";
import Contacts from "./Contacts";

const Home = ({ navOpen, setNavOpen }) => {
  return (
    <div>
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      <Landing />
      <About />
      <Projects />
      <Services />
      <Contacts />
    </div>
  );
};

export default Home;
