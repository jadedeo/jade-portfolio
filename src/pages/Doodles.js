import React from "react";

// components
import Header from "../components/Header";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// other imports
import imageInfo from "../resources/doodleGrid";

const Doodles = () => {
  console.log(imageInfo);
  return (
    <div id="doodles-page">
      <Header />
      <main>
        <h1 className="font-display">Doodles!</h1>

        {/* <img src="daughtersOfIzdihar.JPG" /> */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="1rem">
            <img src="doodles/daughtersOfIzdihar.JPG" />
            <img src="doodles/houseOfBadawi.JPG" />
            <img src="doodles/maliyaDark.JPG" />
            <img src="doodles/shae.JPG" />
            <img src="doodles/tatreez.JPG" />
            <img src="doodles/fathomsZine.JPG" />
          </Masonry>
        </ResponsiveMasonry>
      </main>
    </div>
  );
};

export default Doodles;
