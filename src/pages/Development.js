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

                <img src="/projectPlaceholder.png" />

                <section id="dev-projects-list" className="">
                    {devProjectList
                        // .filter((project) => project.type === "primary")
                        .map((project, index) => {
                            return (
                                // <motion.div
                                //   key={index}
                                //   variants={itemVariants}
                                //   initial="hidden"
                                //   animate="visible"
                                //   custom={index}
                                // >
                                <ProjectCard
                                    key={project.id}
                                    id={project.id}
                                    project={project}
                                    orientation={"vertical"}
                                />
                                // </motion.div>
                            );
                        })}
                </section>
            </main>
        </div>
    );
};

export default Development;
