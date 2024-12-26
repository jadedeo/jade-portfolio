import { Routes, Route } from "react-router-dom";

// pages
import Home from "../src/pages/Home.js";
import Doodles from "./pages/Doodles.js";
import Design from "./pages/Design.js";
import Development from "./pages/Development.js";

function App() {
  return (
    <div className="App bg-slate-300 h-100dvh">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doodles" element={<Doodles />} />
        <Route path="/design" element={<Design />} />
        <Route path="/development" element={<Development />} />
      </Routes>
    </div>
  );
}

export default App;
