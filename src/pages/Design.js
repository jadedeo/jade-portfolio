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
			{/* <Hero
                pageTitle="Big Header Text Here"
                pageSubtitle="Header subtitle here"
            >
                <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    at ex quis enim suscipit tincidunt. Quisque et libero vitae
                    tortor maximus pellentesque sit amet vel quam. Proin elit
                    eros, sollicitudin non nisi sed, iaculis dignissim massa.
                </h6>

                <div className="flex gap-2 mr-auto w-fit ">
                    <LayoutGroup>
                        <ExpandableTag
                            iconClass="fa-brands fa-linkedin-in"
                            hoveredText="LinkedIn"
                            variant="light"
                        />
                        <ExpandableTag
                            iconClass="fa-solid fa-envelope"
                            hoveredText="Email"
                        />
                    </LayoutGroup>
                </div>
            </Hero> */}

			<main className="min-h-[100dvh] py-10 px-[5%]">
				<h1 className="font-display">design</h1>

				<section
					id="design-projects-list"
					className="grid md:grid-cols-3 grid-cols-2 gap-y-10 py-5 max-w-screen-xl mx-auto"
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

				{/* <section
                    id="design-projects-list"
                    className="grid md:grid-cols-3 grid-cols-2 gap-y-10"
                >
                    {designProjectList.map((project, index) => {
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                custom={index}
                                className="grid grid-rows-subgrid row-span-1 cursor-pointer gap-2"
                            >
                                <ProjectCard
                                    key={index}
                                    id={index + 1}
                                    project={project}
                                    orientation={"horizontal"}
                                />
                            </motion.div>
                        );
                    })}
                </section> */}
			</main>
		</div>
	);
};

export default Design;
