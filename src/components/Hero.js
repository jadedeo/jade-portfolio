import React from "react";
import PropTypes from "prop-types";

const Hero = ({ title, subtitle, image, children }) => {
	// console.log("image", image);
	const imageUrl = "/jade-portfolio/" + image;

	// console.log("imageUrl", imageUrl);

	return (
		<div
			className={`hero-component h-full w-full  bg-slate-800 justify-center flex bg-cover bg-no-repeat bg-center  bg-blend-overlay px-[5%]`}
			style={{ backgroundImage: `url(${imageUrl})` }}
		>
			<section className=" w-full max-w-screen-lg m-auto ">
				<div className=" text-white flex flex-col gap-4 justify-end">
					<div className="flex flex-col gap-3">
						<h4>{subtitle}</h4>
						<h1 className="font-display min-w-lg">{title}</h1>
					</div>
					<div className="flex flex-col gap-3">{children}</div>
				</div>
			</section>
		</div>
	);
};

Hero.propTypes = {
	pageTitle: PropTypes.string,
	pageSubtitle: PropTypes.string,
};

export default Hero;
