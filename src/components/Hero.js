import React from "react";
import PropTypes from "prop-types";

const Hero = ({ pageTitle, pageSubtitle, children }) => {
    return (
        <div
            className={`hero-component w-full pt-40 pb-20 bg-slate-800 flex justify-center bg-cover bg-no-repeat bg-center bg-[url("/public/projectPlaceholder.png")] bg-blend-overlay px-[5%]`}
        >
            <div className="max-w-screen-lg text-white flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <h4>{pageSubtitle}</h4>
                    <h1 className="font-display ">{pageTitle}</h1>
                </div>
                <div className="flex flex-col gap-3">{children}</div>
            </div>
        </div>
    );
};

Hero.propTypes = {
    pageTitle: PropTypes.string,
    pageSubtitle: PropTypes.string,
};

export default Hero;
