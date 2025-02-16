import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <Link to={project.link}>
      <div className="project-card bg-white flex flex-col md:flex-row items-center cursor-pointer">
        <div className="p-6 flex flex-col gap-10">
          <div className="flex flex-col">
            <div className="flex gap-3 items-center">
              <img className="h-[45px]" src={project.logo} />
              <div>
                <h2 className="font-display text-xl font-bold">
                  {project.title}
                </h2>
                <h4>{project.subtitle}</h4>
              </div>
            </div>
            <div>
              <hr className="my-3" />
              <p>{project.description}</p>
            </div>
          </div>
          {project.tech && (
            <div className="flex gap-2 flex-wrap">
              {project.tech.map((item, index) => {
                return (
                  <small key={index} className="bg-slate-200 py-2 px-4">
                    {item}
                  </small>
                );
              })}
            </div>
          )}
        </div>
        <div className="">
          <img src={project.image} />
        </div>
      </div>
    </Link>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default ProjectCard;
