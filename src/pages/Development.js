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
        <section
          id="dev-projects-list"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10"
        >
          {devProjectList.map((project, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <ProjectCard key={index} id={index + 1} project={project} />
              </motion.div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Development;
