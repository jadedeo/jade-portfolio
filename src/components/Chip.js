import PropTypes from "prop-types";

const Chip = ({ label, size = "sm" }) => {
	let scale = 1;
	if (size === "sm") scale = 0.75;
	if (size === "md") scale = 1.25;
	if (size === "lg") scale = 2;
	const style = {
		padding: `${scale * 0.5}rem ${scale * 1}rem`,
		border: "none",
	};
	return (
		<>
			<div
				style={style}
				className="chip-component text-sm rounded-full bg-gray-100 w-fit"
			>
				{label}
			</div>
		</>
	);
};

Chip.propTypes = {
	label: PropTypes.string,
	size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Chip;
