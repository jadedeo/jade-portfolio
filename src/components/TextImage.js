import { motion } from "motion/react";

import PropTypes from "prop-types";
import TextGroup from "./TextGroup";

const TextImage = ({
    heading,
    subheading,
    image,
    imageAlt,
    textPlacement = "right",
    children,
}) => {
    return (
        <section className="textimage-component max-w-screen-lg mx-auto py-5 grid grid-cols-2 gap-10 items-center">
            <motion.div
                whileHover={{ scale: 1.05 }}
                className={`hover:shadow-xl cursor-pointer w-full ${
                    textPlacement === "right" ? "order-1" : "order-[-1]"
                }`}
            >
                <img
                    src={image}
                    alt={imageAlt}
                    className="w-full h-full object-cover"
                />
            </motion.div>
            <div
                className={`${
                    textPlacement === "right" ? "order-[-1]" : "order-1"
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
    textPlacement: PropTypes.oneOf(["right", "left"]),
};

export default TextImage;
