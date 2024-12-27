import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomepage = location.pathname == "/" ? true : false;
  // console.log("isHomepage", isHomepage);

  return (
    !isHomepage && (
      <header
        id="site-header"
        className="flex w-full justify-between py-3 px-10 bg-slate-50"
      >
        <Link to="/">
          <div className="flex py-2 gap-3 items-center">
            <img src="logo.png" className="h-10" />
            <h1 className="text-xl font-semibold font-display">jade deo</h1>
          </div>
        </Link>

        <NavbarDesktop />
        <NavbarMobile />
      </header>
    )
  );
};

export default Header;
