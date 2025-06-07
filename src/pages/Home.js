import React from "react";
import { motion } from "motion/react";

// components
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";
import Header from "../components/Header";

const Home = () => {
	return (
		<div id="home-page">
			<main className="h-dvh flex flex-col items-center justify-center">
				<div className="hidden sm:flex w-full justify-center gap-5">
					<motion.h1
						initial={{ y: 25, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.7, ease: "easeInOut" }}
						className="font-display font-bold"
					>
						jade deo
					</motion.h1>
				</div>

				<div className="flex flex-col sm:hidden w-full justify-center items-center gap-5">
					<div className="w-10 h-10 bg-slate-500"></div>
					<h3 className="font-display font-bold">jade deo</h3>
				</div>

				<NavbarDesktop />
				<NavbarMobile />
			</main>
		</div>
	);
};

export default Home;
