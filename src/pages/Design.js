import React, { useState } from "react";
import { LayoutGroup, motion } from "motion/react";

// components
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

import designProjectList from "../resources/designProjectList.json";
import { itemVariants } from "../resources/utils";
import TextGroup from "../components/TextGroup";
import TextImage from "../components/TextImage";
import ExpandableTag from "../components/ExpandableTag";

const Design = () => {
    return (
        <div id="design-page">
            <Header />
            <Hero
                pageTitle="Division Platform"
                pageSubtitle="Penguin Random House"
            />

            <main className="min-h-[100dvh] py-10 px-[5%]">
                <div className="flex gap-2 mr-auto w-fit ">
                    <LayoutGroup>
                        <ExpandableTag
                            iconClass="fa-brands fa-linkedin-in"
                            hoveredText="LinkedIn"
                        />
                        <ExpandableTag
                            iconClass="fa-solid fa-envelope"
                            hoveredText="Email"
                        />
                        <ExpandableTag
                            iconClass="fa-brands fa-linkedin-in"
                            hoveredText="LinkedIn"
                        />
                    </LayoutGroup>
                </div>
                <TextGroup
                    heading={"Sample Heading"}
                    subheading={"Sample subheading"}
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed at ex quis enim suscipit tincidunt. Quisque et
                        libero vitae tortor maximus pellentesque sit amet vel
                        quam. Proin elit eros, sollicitudin non nisi sed,
                        iaculis dignissim massa. Cras ullamcorper, enim non
                        ultrices mattis, velit est ullamcorper eros, vel
                        faucibus leo tortor id orci. Integer posuere dolor sed
                        bibendum hendrerit. Duis eget enim diam. Donec nec
                        dignissim quam, vitae volutpat felis.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed at ex quis enim suscipit tincidunt. Quisque et
                        libero vitae tortor maximus pellentesque sit amet vel
                        quam. Proin elit eros, sollicitudin non nisi sed,
                        iaculis dignissim massa.
                    </p>
                </TextGroup>

                <TextImage
                    heading={"Sample heading"}
                    subheading={"Sample subheading"}
                    image={"projectPlaceholder.png"}
                    imageAlt={"image alt text"}
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed at ex quis enim suscipit tincidunt. Quisque et
                        libero vitae tortor maximus pellentesque sit amet vel
                        quam. Proin elit eros, sollicitudin non nisi sed,
                        iaculis dignissim massa.
                    </p>
                </TextImage>
                <TextImage
                    subheading={"Sample subheading"}
                    image={"projectPlaceholder.png"}
                    textPlacement="left"
                    imageAlt={"image alt text"}
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed at ex quis enim suscipit tincidunt. Quisque et
                        libero vitae tortor maximus pellentesque sit amet vel
                        quam. Proin elit eros, sollicitudin non nisi sed,
                        iaculis dignissim massa.
                    </p>
                </TextImage>

                <TextGroup heading={""} subheading={"Sample subheading"}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed at ex quis enim suscipit tincidunt. Quisque et
                        libero vitae tortor maximus pellentesque sit amet vel
                        quam. Proin elit eros, sollicitudin non nisi sed,
                        iaculis dignissim massa.
                    </p>
                </TextGroup>

                {/* <section
                    id="design-projects-list"
                    className="grid md:grid-cols-3 grid-cols-2 gap-y-10"
                >
                    {designProjectList.map((project, index) => {
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                custom={index}
                                className="grid grid-rows-subgrid row-span-1 cursor-pointer gap-2"
                            >
                                <ProjectCard
                                    key={index}
                                    id={index + 1}
                                    project={project}
                                    orientation={"horizontal"}
                                />
                            </motion.div>
                        );
                    })}
                </section> */}

                <section
                    id="design-projects-list"
                    className="grid md:grid-cols-3 grid-cols-2 gap-y-10 py-5"
                >
                    {designProjectList.map((project, index) => {
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                initial="hidden"
                                animate="visible"
                                custom={index}
                                className="grid grid-rows-subgrid row-span-4  cursor-pointer gap-2"
                            >
                                <ProjectCard
                                    key={index}
                                    id={index + 1}
                                    project={project}
                                />
                            </motion.div>
                        );
                    })}
                </section>
            </main>
        </div>
    );
};

export default Design;
