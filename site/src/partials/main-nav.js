import { Link } from "gatsby";
import React from "react";

const MainNav = ({ menuLinks }) => (
	<nav className="menu">
		{ menuLinks.map(link =>
			<Link
				className="menu_link"
				to={ link.link }>{ link.name }</Link>
		)}
	</nav>
);

export default MainNav;