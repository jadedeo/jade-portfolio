import React from "react";

// components
import Header from "../components/Header";
import DoodleCard from "../components/DoodleCard";
import { Masonry } from "@mui/lab";

// other imports
import imageInfo from "../resources/doodleGrid";

const Doodles = () => {
  // console.log(imageInfo);
  return (
    <div id="doodles-page">
      <Header />
      <main>
        <h1 className="font-display">Doodles!</h1>

        <Masonry columns={3} spacing={{ xs: 1, sm: 2, md: 3 }}>
          {imageInfo.map((image, index) => {
            return <DoodleCard key={index} image={image} />;
          })}
        </Masonry>
      </main>
    </div>
  );
};

export default Doodles;
