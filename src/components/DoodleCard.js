import React from "react";
import { motion } from "motion/react";

const DoodleCard = ({ image }) => {
  //   console.log("working with:", image);

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      className="bg-white cursor-pointer"
    >
      <img src={image.imagePath}></img>
      {image.description && (
        <div className="p-4">
          <h3 className="font-display font-bold">{image.title}</h3>
          <p>{image.description}</p>
        </div>
      )}
    </motion.div>
  );
};

export default DoodleCard;
