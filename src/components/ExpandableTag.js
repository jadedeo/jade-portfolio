import PropTypes from "prop-types";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { iconClasses } from "@mui/material";

const ExpandableTag = ({
    iconClass,
    hoveredText,
    initialText = null,
    variant = "dark",
}) => {
    const width = useRef(0);
    const ref = useRef < HTMLDivElement > null;
    const [isHovering, setIsHovering] = useState(false);
    // console.log("ref", ref);
    // console.log("width.current", width.current);
    return (
        <LayoutGroup>
            <motion.div
                className="inline-block"
                style={{ minWidth: width.current }}
                onHoverStart={() => {
                    if (!isHovering) {
                        width.current = ref.current?.offsetWidth;
                    }
                    setIsHovering(true);
                }}
                onHoverEnd={() => setIsHovering(false)}
            >
                <motion.div
                    layout
                    className={`inline-block relative ${
                        variant == "dark"
                            ? "text-white bg-black"
                            : "text-black bg-white"
                    } px-4 py-1.5 tracking-wider text-sm font-medium whitespace- cursor-pointer`}
                >
                    <AnimatePresence initial={false} mode="wait">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            // transition={{ duration: 5 }}
                            key={isHovering ? "hovering" : "unhovering"}
                        >
                            {isHovering ? (
                                <div className="flex items-center gap-2 h-5">
                                    <i className={`${iconClass} `} />
                                    <span>{hoveredText}</span>
                                </div>
                            ) : (
                                <div className="flex items-center gap-x-2 h-5">
                                    <i className={`${iconClass} `} />
                                    {initialText && <span>{initialText}</span>}
                                </div>
                            )}
                        </motion.span>
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </LayoutGroup>
    );
};

ExpandableTag.propTypes = {
    iconClass: PropTypes.string,
    hoveredText: PropTypes.string,
    initialText: PropTypes.string,
    variant: PropTypes.oneOf(["dark", "light"]),
};

export default ExpandableTag;
