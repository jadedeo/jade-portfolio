import React from "react";
import { motion } from "motion/react";

// components
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

import devProjectList from "../resources/devProjectList.json";
import { itemVariants } from "../resources/utils";

const Development = () => {
	return (
		<div id="development-page">
			<Header />
			<main className="min-h-[100dvh] py-10 px-[5%]">
				<section className="my-5">
					<h1 className="font-display">development</h1>
				</section>

				<section
					id="design-projects-list"
					className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-10 py-5 max-w-screen-xl mx-auto"
				>
					{devProjectList.map((project, index) => {
						return (
							<motion.div
								key={index}
								variants={itemVariants}
								whileHover={{ scale: 1.05 }}
								initial="hidden"
								animate="visible"
								custom={index}
								className="grid grid-rows-subgrid row-span-4 cursor-pointer gap-2 hover:z-[10000]"
							>
								<ProjectCard
									key={index}
									id={index + 1}
									project={project}
								/>
							</motion.div>
						);
					})}
				</section>
			</main>
		</div>
	);
};

export default Development;
