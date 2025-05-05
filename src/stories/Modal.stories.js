import React, { useState } from "react";
import Modal from "../components/Modal";

export default {
    title: "Components/Modal",
    component: Modal,
};

const Template = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="p-6">
            <button
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={() => setIsOpen(true)}
            >
                Open Modal
            </button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} {...args}>
                <h2 className="text-xl font-bold mb-2">This is a Modal</h2>
                <p className="text-gray-700">
                    You can place any content here — text, buttons, forms, etc.
                </p>
            </Modal>
        </div>
    );
};

export const Basic = Template.bind({});
Basic.args = {};
