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
      <main className="min-h-[100dvh] py-10 px-[10%]">
        <section id="dev-projects-list" className="flex flex-col gap-5">
          {devProjectList.map((project, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <ProjectCard key={index} project={project} />
              </motion.div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Development;
