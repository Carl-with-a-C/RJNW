import "./sass/main.scss";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Projects />
      <Services />
      <Contacts />
    </div>
  );
}

export default App;
