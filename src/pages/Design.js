import React from "react";
import { motion } from "motion/react";

// components
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

import designProjectList from "../resources/designProjectList.json";
import { itemVariants } from "../resources/utils";

const Design = () => {
  return (
    <div id="design-page">
      <Header />
      <main className="min-h-[100dvh] py-10 px-[5%]">
        <section id="design-projects-list" className="grid grid-cols-2">
          {designProjectList.map((project, index) => {
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

export default Design;
