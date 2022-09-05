import React from "react";
import { Button } from "@components/Button";

export const Footer = ({ children }) => {
	return (
		<footer className="footer">
			<div className="footer__logo">{children}</div>
			<div>
				<h4>Quick Links</h4>
				<ul className="footer__lists">
					<li>
						<a href="#">About Us</a>
					</li>
					<li>
						<a href="#">Blog</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
					<li>
						<a href="#">FAQ</a>
					</li>
				</ul>
			</div>
			<div>
				<h4>Legal Stuff</h4>
				<ul className="footer__lists">
					<li>
						<a href="#">Disclaimer</a>
					</li>
					<li>
						<a href="#">Financing</a>
					</li>
					<li>
						<a href="#">Privacy Policy</a>
					</li>
					<li>
						<a href="#">Terms of Service</a>
					</li>
				</ul>
			</div>
			<div className="footer__email">
				<h4>Knowing you´re always on the best energy deal. </h4>
				<input
					type="text"
					placeholder="Enter email"
				/>
				<Button text={"Sign up Now"} />
			</div>
			<h5>Made With Love By Product All Right Reserved</h5>
		</footer>
	);
};
