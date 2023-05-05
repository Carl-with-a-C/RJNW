import "swiper/css/bundle";
import "./sass/main.scss";
import Home from "./components/Home";
import Facia from "./components/Facia";
import ReRoof from "./components/ReRoof";
import Conversions from "./components/Conversions";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="facias" element={<Facia />} />
        <Route path="re-roof" element={<ReRoof />} />
        <Route path="conversions" element={<Conversions />} />
      </Routes>
    </div>
  );
}

export default App;
