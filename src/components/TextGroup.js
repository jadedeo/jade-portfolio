import PropTypes from "prop-types";
const TextGroup = ({ heading, subheading, children }) => {
	return (
		<section
			className={`textgroup-component max-w-screen-lg flex flex-col ${
				subheading || children ? "gap-3" : ""
			}`}
		>
			{heading && <h2 className="font-display ">{heading}</h2>}
			<div>
				{subheading && (
					<h3 className="text-xl font-bold">{subheading}</h3>
				)}
				<div className="flex flex-col gap-5">{children}</div>
			</div>
		</section>
	);
};

TextGroup.propTypes = {
	heading: PropTypes.string,
	subheading: PropTypes.string,
};

export default TextGroup;
