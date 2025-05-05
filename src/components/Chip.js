import PropTypes from "prop-types";

const Chip = ({ label, size = "sm" }) => {
    let scale = 1;
    if (size === "sm") scale = 0.75;
    if (size === "lg") scale = 4;
    const style = {
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: "none",
    };
    return (
        <>
            <div
                style={style}
                className="chip-component text-sm rounded-full bg-slate-100 w-fit"
            >
                {label}
            </div>
        </>
    );
};

Chip.propTypes = {
    label: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md"]),
};

export default Chip;
