import React from "react";

const Hero = ({ pageTitle, pageSubtitle }) => {
    return (
        <div
            className={`hero-component w-full pt-40 pb-20 bg-slate-800 flex justify-center bg-cover bg-no-repeat bg-center bg-[url("/public/projectPlaceholder.png")] bg-blend-overlay px-[5%]`}
        >
            <div className="max-w-screen-lg text-white flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <h4>{pageSubtitle}</h4>
                    <h1 className="font-display ">{pageTitle}</h1>
                </div>
                <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent gravida arcu dui, ut eleifend felis congue sit
                    amet. Vivamus tincidunt sapien et quam ultrices hendrerit.
                </h6>
            </div>
        </div>
    );
};

export default Hero;
