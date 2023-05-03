import "./sass/main.scss";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Projects />
    </div>
  );
}

export default App;
