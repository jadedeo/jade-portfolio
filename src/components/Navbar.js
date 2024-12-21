import { Link } from "react-router-dom";

//components

const Navbar = () => {
  return (
    <nav id="site-navbar">
      <Link to="/illustration">Illustration</Link>
      <Link to="/design">Design</Link>
    </nav>
  );
};

export default Navbar;
