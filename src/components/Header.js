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
			<>
				<header
					id="site-header"
					className="flex w-full justify-between py-3 px-[5%]  bg-white bg-opacity-45"
				>
					<Link to="/">
						<div className="flex py-2 gap-3 items-center">
							<img src="darkLogo.png" className="h-10" />
							{/* <h3 className="font-semibold font-display">
								jade deo
							</h3> */}
						</div>
					</Link>

					<NavbarDesktop />
					<NavbarMobile />
				</header>
			</>
		)
	);
};

export default Header;
