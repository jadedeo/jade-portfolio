import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "../src/pages/Home.js";
import Resume from "../src/pages/Resume.js";
import About from "../src/pages/About.js";
import Doodles from "./pages/Doodles.js";
import Design from "./pages/Design.js";
import Development from "./pages/Development.js";
import Splash from "../src/pages/Splash.js";
import DivisionPlatform from "../src/pages/DivisionPlatform.js";
import GiantEagle from "../src/pages/GiantEagle.js";

import routes from "../src/resources/routes.json";

console.log(routes);

const componentMap = {
	Home,
	Resume,
	About,
	Doodles,
	Design,
	Development,
	Splash,
	DivisionPlatform,
	GiantEagle,
};

function App() {
	return (
		<div className="App bg-white h-100dvh scroll-smooth">
			<Routes>
				{routes.map((route, index) => {
					const Component = componentMap[route.component];
					if (!Component) {
						console.warn(
							`Component "${route.component}" not found.`
						);
						return null;
					}
					return (
						<Route
							key={index}
							path={route.path}
							element={<Component />}
						/>
					);
				})}
			</Routes>
		</div>
	);
}

export default App;
