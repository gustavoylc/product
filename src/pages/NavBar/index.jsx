import React, { useState } from "react";
import { Logo } from "@components/Logo";
import { Menu } from "@components/Menu";
import { Button } from "@components/Button";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const NavBar = () => {
	const [mode, setMode] = useState(false);
	const toggleMode = () => {
		setMode(!mode);
	};
	return (
		<nav className="navBar">
			<div className="navBar__logo">
				<Logo />
			</div>
			<div className="navBar__menu">
				<ul className="navBar__menu--list">
					<li>
						<h4>Product</h4>
					</li>
					<li>
						<h4>Customers</h4>
					</li>
					<li>
						<h4>Pricing</h4>
					</li>
					<li>
						<h4>Resources</h4>
					</li>
				</ul>
				<div>
					<Button
						text={"Sign In"}
						classSize={"button button__invert button__menu"}
					></Button>
				</div>
				<div>
					<Button
						text={"Sign Up"}
						classSize={"button button__menu"}
					></Button>
				</div>
				<div>
					{mode ? (
						<MdDarkMode
							size={25}
							onClick={toggleMode}
						/>
					) : (
						<MdOutlineLightMode
							size={25}
							onClick={toggleMode}
						/>
					)}
				</div>
			</div>
			<div className="navBar__menu--burger">
				<Menu />
			</div>
		</nav>
	);
};

export { NavBar };
