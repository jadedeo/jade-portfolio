import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FadeSnapSection = ({ children, className }) => {
	const ref = useRef(null);
	const inView = useInView(ref, { amount: 0.6, once: false });

	return (
		<motion.section
			ref={ref}
			className={`snap-center  ${className}`}
			// animate={{ opacity: inView ? 1 : 0.25 }}
			// transition={{ duration: 0.6 }}
		>
			{children}
		</motion.section>
	);
};

export default FadeSnapSection;
