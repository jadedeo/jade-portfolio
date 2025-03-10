import PropTypes from "prop-types";

const Button = ({ label, size = "md" }) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const style = {
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
  };
  return (
    <>
      <button onClick={handleClick} style={style} className="bg-slate-100 ">
        {label}
      </button>
    </>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Button;
