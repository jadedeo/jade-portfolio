import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "../src/pages/Home.js";
import Illustration from "./pages/Illustration.js";
import Design from "./pages/Design.js";

function App() {
  // const ROUTER_BASENAME = "/jade-portfolio";
  // console.log(ROUTER_BASENAME);

  return (
    <Router basename="/jade-portfolio">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/illustration" element={<Illustration />} />
          <Route path="/design" element={<Design />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
