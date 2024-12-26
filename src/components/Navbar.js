import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useLocation } from "react-router-dom";

import routes from "../resources/routes.json";

const Navbar = () => {
  const location = useLocation();
  console.log(location);

  const isHomepage = location.pathname == "/" ? true : false;

  const NavTag = isHomepage ? motion.nav : "nav";
  const LinkTag = isHomepage ? Link : motion(Link);

  // console.log("ROUTES", routes);

  return (
    <NavTag
      id="site-navbar"
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
      className="hidden md:flex gap-5 items-center"
    >
      {routes.map((route, index) => {
        return isHomepage ? (
          <Link key={index} to={route.href} className="py-2 px-4">
            {route.title}
          </Link>
        ) : (
          <LinkTag
            key={index}
            to={route.href}
            className="py-2 px-4"
            whileHover={{
              backgroundColor: "#F1F5F9",
              transition: { duration: 0.5 },
            }}
          >
            {route.title}
          </LinkTag>
        );
      })}
    </NavTag>
  );
};

export default Navbar;
