import { motion } from "motion/react";

import PropTypes from "prop-types";
import TextGroup from "./TextGroup";

const TextImage = ({
	heading,
	subheading,
	image,
	imageAlt,
	imagePlacement = "right",
	children,
	className,
	addImageShadow = true,
}) => {
	return (
		<section
			className={`textimage-component max-w-screen-lg mx-auto grid md:grid-cols-2 grid-cols-1 items-center ${className} shadow-lg`}
		>
			<motion.div
				// whileHover={{ scale: 1.05 }}
				className={`cursor-pointer w-full h-full max-h-[600px] overflow-hidden p-9 bg-gray-100 place-content-center ${
					imagePlacement === "right" ? "order-1" : "order-[-1]"
				}`}
			>
				{image && (
					<img
						src={image}
						alt={imageAlt}
						className={`mx-auto max-h-full object-contain ${
							addImageShadow ? "shadow-lg" : ""
						}`}
					/>
				)}
			</motion.div>
			<div
				className={`w-fit mx-auto p-10 ${
					imagePlacement === "right" ? "order-[-1]" : "order-1"
				}`}
			>
				<TextGroup heading={heading} subheading={subheading}>
					{children}
				</TextGroup>
			</div>
		</section>
	);
};

TextImage.propTypes = {
	heading: PropTypes.string,
	subheading: PropTypes.string,
	image: PropTypes.string,
	imageAlt: PropTypes.string,
	imagePlacement: PropTypes.oneOf(["right", "left"]),
};

export default TextImage;
