import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

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

  return (
    <div id="doodles-page">
      <Header />
      <main className="py-10 px-[10%]">
        <Masonry columns={columns} spacing={{ xs: 2, sm: 2, md: 3 }}>
          <AnimatePresence>
            {imageInfo.map((image, index) => {
              return <DoodleCard key={index} image={image} />;
            })}
          </AnimatePresence>
        </Masonry>
      </main>
    </div>
  );
};

export default Doodles;
