import React, { useState } from "react";
import { motion } from "motion/react";

import DoodleModal from "./DoodleModal";

const DoodleCard = ({ image }) => {
  //   console.log("working with:", image);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    // console.log("image", image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        className="bg-slate-50 cursor-pointer"
        onClick={handleClickOpen}
      >
        <img src={image.imagePath} className="" />
        {image.isPublished && (
          <div className="flex flex-col gap-2 p-4">
            <div className="flex flex-col items-start">
              <h3 className="font-display font-bold">{image.title}</h3>
              {image.subtitle && <small className="">{image.subtitle}</small>}
            </div>
            <hr></hr>
            <small
              dangerouslySetInnerHTML={{ __html: image.description }}
            ></small>
          </div>
        )}
      </motion.div>

      <DoodleModal open={open} onClose={handleClose} image={image} />
    </>
  );
};

export default DoodleCard;
