import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useLocation } from "react-router-dom";

import routes from "../resources/routes.json";

const NavbarDesktop = () => {
  const location = useLocation();
  const isHomepage = location.pathname == "/" ? true : false;

  const NavTag = isHomepage ? motion.nav : "nav";
  const LinkTag = isHomepage ? Link : motion.create(Link);

  // console.log("isHomepage", isHomepage);

  return (
    <NavTag
      id="desktop-navbar"
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
      className="hidden md:flex gap-[2em] items-center"
    >
      {routes
        .filter(
          (route) =>
            route.title == "doodles" ||
            route.title == "design" ||
            route.title == "development"
        )
        .map((route, index) => {
          return isHomepage ? (
            <LinkTag key={index} to={route.href} className="py-2 px-4">
              {route.title}
            </LinkTag>
          ) : (
            <LinkTag key={index} to={route.href} className="py-2 px-4">
              {route.title}
            </LinkTag>
          );
        })}
    </NavTag>
  );
};

export default NavbarDesktop;
