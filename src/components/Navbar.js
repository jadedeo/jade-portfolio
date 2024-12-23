import { Link } from "react-router-dom";
import { motion } from "motion/react";

//components

const Navbar = () => {
  return (
    <motion.nav
      id="site-navbar"
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
      className="flex gap-10"
    >
      <Link to="/doodles" className="p-2">
        doodles
      </Link>
      <Link to="/design" className="p-2">
        design
      </Link>
      <Link to="/development" className="p-2">
        development
      </Link>
    </motion.nav>
  );
};

export default Navbar;
