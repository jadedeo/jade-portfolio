import React, { useState } from "react";
import Modal from "../components/Modal";
import projectPlaceholder from "../../public/projectPlaceholder.png";
import { motion, AnimatePresence } from "framer-motion";

export default {
    title: "Components/Modal",
    component: Modal,
};

const Template = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="p-6">
            {/* <button
                className="px-4 py-2 bg-black text-white rounded"
                onClick={() => setIsOpen(true)}
            >
                Open Modal
            </button> */}

            <motion.div
                className="w-[25%] cursor-pointer hover:shadow-xl"
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.05 }}
            >
                <img
                    src={projectPlaceholder}
                    alt={"Modal image"}
                    className=""
                />
            </motion.div>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} {...args} />
        </div>
    );
};

export const ImageOnly = Template.bind({});
ImageOnly.args = {
    content: {
        image: "/projectPlaceholder.png", // must be in `public/` folder
    },
};

export const ImageWithCaption = Template.bind({});
ImageWithCaption.args = {
    content: {
        image: "/projectPlaceholder.png", // must be in `public/` folder
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
};

export const ImageWithLongContent = Template.bind({});
ImageWithLongContent.args = {
    content: {
        image: "/projectPlaceholder.png",
        title: "Image Title",
        client: "Client Name",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ex quis enim suscipit tincidunt. Quisque et libero vitae tortor maximus pellentesque sit amet vel quam.",
        details: ["2024", "Procreate + Photoshop"],
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
};

export const EmptyState = Template.bind({});
EmptyState.args = {
    content: null,
};
