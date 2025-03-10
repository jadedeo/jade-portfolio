import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const Hero = ({ pageTitle }) => {
  return (
    <div
      className={`hero-container w-full pt-40 pb-20 bg-slate-100 flex justify-center bg-cover bg-no-repeat bg-center bg-[url("/public/placeholder1.jpeg")] bg-blend-overlay`}
    >
      <div className="max-w-screen-lg">
        <h1 className="font-display text-8xl">{pageTitle}</h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          gravida arcu dui, ut eleifend felis congue sit amet. Vivamus tincidunt
          sapien et quam ultrices hendrerit.
        </h4>
      </div>
    </div>
  );
};

export default Hero;
