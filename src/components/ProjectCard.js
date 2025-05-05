import React from "react";
import { Link } from "react-router-dom";

import Chip from "../components/Chip";

import PropTypes from "prop-types";

const ProjectCard = ({ id, project, orientation = "vertical" }) => {
    // bg-[url("/public/placeholder1.jpeg")]
    let imgPath = "/public/placeholder1.jpeg";
    let imgStyle = `url(${imgPath})`;

    const items = [
        {
            title: "Item 1",
            subtitle: "Short subtitle",
            description: "Small description",
        },
        {
            title: "Item 2",
            subtitle: "A slightly longer subtitle",
            description: "A longer description that spans multiple lines.",
        },
        {
            title: "Item 3",
            subtitle: "Short subtitle",
            description: "Medium-length description with more text.",
        },
        {
            title: "Item 4",
            subtitle: "Short subtitle",
            description: "Very short description",
        },
    ];
    console.log(project);

    return (
        <>
            {orientation === "vertical" ? (
                <div className="projectcard-vertical-component grid grid-rows-subgrid row-span-4 cursor-pointer gap-2 max-w-screen-sm hover:shadow-xl bg-white">
                    <div className="w-full ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="grid grid-cols-[auto,1fr] gap-5 px-5 mt-5">
                        <h2 className="font-display">
                            {id.toLocaleString("en-US", {
                                minimumIntegerDigits: 2,
                                useGrouping: false,
                            })}
                        </h2>
                        <div className="flex flex-col gap-1">
                            <h2 className="font-bold text-xl leading-none">
                                {project.title}
                            </h2>
                            <h3 className="text-sm text-gray-500">
                                {project.subtitle}
                            </h3>
                            {/* <hr className="" /> */}
                        </div>
                    </div>
                    <div className="px-5">
                        <p>{project.description}</p>
                    </div>
                    <div className="flex gap-1 flex-wrap px-5 mb-5 h-fit">
                        {project.tags?.map((tag, i) => (
                            <Chip key={i} label={tag} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="projectcard-horizontal-component grid grid-cols-[2fr_3fr] gap-2 overflow-hidden max-w-screen-lg hover:shadow-md">
                    {/* Left: Image */}
                    <div className="w-full h-full">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col p-4 gap-3">
                        <div className="flex gap-4 items-start">
                            <h2 className="font-display">
                                {id.toLocaleString("en-US", {
                                    minimumIntegerDigits: 2,
                                    useGrouping: false,
                                })}
                            </h2>
                            <div className="flex flex-col">
                                <h2 className="font-bold text-xl leading-tight">
                                    {project.title}
                                </h2>
                                <h3 className="text-sm text-gray-500">
                                    {project.subtitle}
                                </h3>
                            </div>
                        </div>
                        <p className="text-gray-700">{project.description}</p>
                        <div className="flex gap-1 flex-wrap">
                            {project.tags?.map((tag, i) => (
                                <Chip key={i} label={tag} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

ProjectCard.propTypes = {
    id: PropTypes.number,
    project: PropTypes.object,
    orientation: PropTypes.string,
};

export default ProjectCard;
