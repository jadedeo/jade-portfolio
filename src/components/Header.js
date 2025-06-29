import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = ({ useLightLogo }) => {
	const location = useLocation();
	const isHomepage = location.pathname === "/";

	const logoSrc = useLightLogo
		? "/jade-portfolio/lightLogo.png"
		: "/jade-portfolio/darkLogo.png";

	return (
		!isHomepage && (
			<div className="w-full">
				<header
					id="site-header"
					className="flex py-0 px-2 fixed right-3 top-5 z-[100000]"
				>
					<NavbarDesktop useLightText={useLightLogo} />
					<Link to="/">
						<div className="flex p-2 items-center">
							<img src={logoSrc} className="h-10" />
						</div>
					</Link>
					<NavbarMobile />
				</header>
			</div>
		)
	);
};

export default Header;
