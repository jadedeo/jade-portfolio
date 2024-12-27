import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

// components
import Header from "../components/Header";
import DoodleCard from "../components/DoodleCard";
import { Masonry } from "@mui/lab";

// other imports
import imageInfo from "../resources/doodleGrid";

const Doodles = () => {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768 && window.innerWidth > 480) {
        setColumns(2);
      } else if (window.innerWidth <= 480) {
        setColumns(1);
      } else {
        setColumns(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <div id="doodles-page">
      <Header />
      <main className="py-10 px-[10%]">
        <Masonry columns={columns} spacing={{ xs: 2, sm: 2, md: 3 }}>
          {imageInfo.map((image, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={index} // Custom prop for staggered animation
              >
                <DoodleCard key={index} image={image} />
              </motion.div>
            );
          })}
        </Masonry>
      </main>
    </div>
  );
};

export default Doodles;
