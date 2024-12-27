import React, { useState } from "react";
import { motion } from "motion/react";
import { AsyncImage } from "loadable-image";

import DoodleModal from "./DoodleModal";

const DoodleCard = ({ image }) => {
  //   console.log("working with:", image);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
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
        <AsyncImage
          src={image.imagePath}
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: image.aspectRatio.width / image.aspectRatio.height,
          }}
          // Transition={Blur}
          loader={<div style={{ background: "#e2e8f0" }} />}
          error={<div style={{ background: "#eee" }} />}
        />
        {image.isPublished && (
          <div className="flex flex-col gap-2 p-4">
            <div className="flex flex-col items-start">
              <h3 className="font-display font-bold">{image.title}</h3>
              {image.subtitle && <small className="">{image.subtitle}</small>}
            </div>
          </div>
        )}
      </motion.div>

      <DoodleModal open={open} onClose={handleClose} image={image} />
    </>
  );
};

export default DoodleCard;
