import React from "react";
import { NavLink } from "react-router";

import Chip from "../components/Chip";

import PropTypes from "prop-types";

const ProjectCard = ({ id, project, orientation = "vertical" }) => {
	console.log(project);

	return (
		<>
			{orientation === "vertical" ? (
				<NavLink
					to={project.link}
					state={{ projectData: project }}
					className="projectcard-vertical-component grid grid-rows-subgrid row-span-4 cursor-pointer gap-2 hover:shadow-xl bg-white grayscale hover:grayscale-0 transition-[filter] duration-500 ease-in-out"
				>
					<div className="w-full max-h-[400px]">
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
							<h3 className="font-bold text-xl leading-none">
								{project.title}
							</h3>
							<h4 className="text-sm text-gray-500">
								{project.subtitle}
							</h4>
						</div>
					</div>
					<div className="px-5">
						<p>{project.description}</p>
					</div>
					<div className="flex gap-1 flex-wrap px-5 mb-5 mt-3 h-fit">
						{project.tags?.map((tag, i) => (
							<Chip key={i} label={tag} />
						))}
					</div>
				</NavLink>
			) : (
				<NavLink
					to={project.link}
					className="projectcard-horizontal-component grid grid-cols-[2fr_3fr] gap-2 overflow-hidden max-w-screen-lg hover:shadow-md grayscale hover:grayscale-0 transition-[filter] duration-500 ease-in-out"
				>
					{/* Image */}
					<div className="w-full h-full">
						<img
							src={project.image}
							alt={project.title}
							className="w-full h-full object-cover"
						/>
					</div>

					{/* Content */}
					<div className="flex flex-col justify-between p-4 gap-3">
						<div>
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
							<p className="text-gray-700">
								{project.description}
							</p>
						</div>
						<div className="flex gap-1 flex-wrap">
							{project.tags?.map((tag, i) => (
								<Chip key={i} label={tag} />
							))}
						</div>
					</div>
				</NavLink>
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
