import "./sass/main.scss";
import Home from "./components/Home";
import Facia from "./components/Facia";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="facias" element={<Facia />} />
      </Routes>
    </div>
  );
}

export default App;
