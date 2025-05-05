import React, { useRef, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
const ExpandableTag = ({ iconClass, hoveredText, initialText = null }) => {
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
                    className="inline-block relative text-gray-300 bg-gray-900 ring-1 ring-gray-800 px-4 py-1.5 tracking-wider text-sm font-medium whitespace- cursor-pointer"
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
                                    <i className={`${iconClass} text-white`} />
                                    <span>{hoveredText}</span>
                                </div>
                            ) : (
                                <div className="flex items-center gap-x-2 h-5">
                                    <i className={`${iconClass} text-white`} />
                                    {initialText && (
                                        <span>LinkedIn Blah Blah</span>
                                    )}
                                </div>
                            )}
                        </motion.span>
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </LayoutGroup>
    );
};

export default ExpandableTag;
