import React from "react";

const StickyNote = ({ children, className = "" }) => {
	// Random tilt between -3deg and 3deg
	const tilt = Math.floor(Math.random() * 7) - 3;
	const colors = ["#fef9c3", "#f6c2d9", "#bcdfc9", "#fbbf24", "#a1c8e9"];
	const randomColor = colors[Math.floor(Math.random() * colors.length)];

	return (
		<div
			className={`flex flex-col gap-2  text-gray-900 shadow-lg p-5 min-w-[200px] max-w-[300px] min-h-[200px] h-fit  transition-transform duration-300 ease-in-out hover:scale-105 hover:z-10 font-handwritten text-xl ${className}`}
			style={{
				transform: `rotate(${tilt}deg)`,
				boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.3)",
				backgroundColor: randomColor,
			}}
		>
			{children}
		</div>
	);
};

export default StickyNote;
