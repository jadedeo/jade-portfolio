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
	addComponentShadow = true,
	mat = true,
}) => {
	return (
		<section
			className={`textimage-component ${imagePlacement}-variant max-w-screen-lg mx-auto grid ${
				imagePlacement === "bottom" || imagePlacement === "top"
					? "md:grid-cols-1"
					: "md:grid-cols-2"
			}  grid-cols-1 items-center ${
				addComponentShadow ? "" : ""
			}  ${className}`}
		>
			<motion.div
				// whileHover={{ scale: 1.05 }}
				className={`w-full h-full max-h-[600px] overflow-hidden ${
					mat ? "p-9" : "p-0"
				} bg-gray-100 place-content-center ${
					imagePlacement === "right" || imagePlacement === "bottom"
						? "order-1"
						: "order-[-1]"
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
				className={`w-fit mx-auto ${
					imagePlacement === "bottom"
						? "pb-10"
						: imagePlacement === "top"
						? "pt-10"
						: imagePlacement === "left"
						? "py-10 pl-10"
						: "py-10 pr-10"
				} ${
					imagePlacement === "right" || imagePlacement === "bottom"
						? "order-[-1]"
						: "order-1"
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
	imagePlacement: PropTypes.oneOf(["right", "left", "top", "bottom"]),
};

export default TextImage;
