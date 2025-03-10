import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const ProjectCard = ({ id, project }) => {
  return (
    <Link to={project.link}>
      <div className="project-card bg-white items-start cursor-pointer border-solid border">
        <div
          className={`project-image-container h-[450px] w-full bg-cover bg-no-repeat bg-center bg-[url("/public/placeholder1.jpeg")]`}
        ></div>

        <div className="project-text px-3 py-5 grid grid-rows-subgrid row-span-2 gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex gap-5">
              <h1 className="font-display text-7xl">
                {id.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
              </h1>
              <div className="w-full">
                <h2 className="font-body text-xl font-bold">{project.title}</h2>
                <h4>{project.subtitle}</h4>
                <hr className="mt-1"></hr>
              </div>
            </div>

            <p>{project.description}</p>
          </div>

          {project.skills && (
            <div className="flex gap-2 flex-wrap">
              {project.skills.map((item, index) => {
                return (
                  <small key={index} className="bg-black text-white py-2 px-4">
                    {item}
                  </small>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.number,
  project: PropTypes.object,
};

export default ProjectCard;
