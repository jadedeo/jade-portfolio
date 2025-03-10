import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// pages
// import Home from "../src/pages/Home.js";
// import Doodles from "./pages/Doodles.js";
// import Design from "./pages/Design.js";
// import Development from "./pages/Development.js";

import routes from "../src/resources/routes.json";
import { capitalize } from "../src/resources/utils.js";

const DynamicImport = (name) => {
  return React.lazy(() => import(`./pages/${capitalize(name)}`));
};

function App() {
  return (
    <div className="App bg-white h-100dvh">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, index) => {
            const Component = DynamicImport(route.title);
            return (
              <Route key={index} path={route.href} element={<Component />} />
            );
          })}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
