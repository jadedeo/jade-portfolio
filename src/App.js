import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

// pages
import Home from "../src/pages/Home.js";
import Illustration from "./pages/Illustration.js";
import Design from "./pages/Design.js";

function App() {
  const ROUTER_BASENAME = process.env.REACT_APP_ROUTER_BASENAME;

  return (
    <Router basename={ROUTER_BASENAME}>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/illustration" element={<Illustration />} />
          <Route path="/design" element={<Design />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
