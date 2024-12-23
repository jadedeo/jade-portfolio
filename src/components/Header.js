import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="site-header" className="flex w-full justify-between py-3">
      <Link to="/">
        <div className="flex py-2 gap-10">
          <h1 className="">IMG</h1>
          <h1 className="">jade deo</h1>
        </div>
      </Link>

      <Navbar />
    </header>
  );
};

export default Header;
