import React, { useState } from "react";
import { LayoutGroup, motion } from "motion/react";

// components
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

import designProjectList from "../resources/designProjectList.json";
import { itemVariants } from "../resources/utils";
import TextGroup from "../components/TextGroup";
import TextImage from "../components/TextImage";
import ExpandableTag from "../components/ExpandableTag";
import Quote from "../components/Quote";

const Design = () => {
	return (
		<div id="design-page">
			<Header />

			<main className="min-h-[100dvh] py-10 px-[5%]">
				<section className="my-5">
					<h1 className="font-display">design</h1>
				</section>

				<section
					id="design-projects-list"
					className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-10 py-5  mx-auto"
				>
					{designProjectList.map((project, index) => {
						return (
							<motion.div
								key={index}
								variants={itemVariants}
								whileHover={{ scale: 1.05 }}
								initial="hidden"
								animate="visible"
								custom={index}
								className="grid grid-rows-subgrid row-span-4 cursor-pointer gap-2 hover:z-[1000]"
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

export default Design;
