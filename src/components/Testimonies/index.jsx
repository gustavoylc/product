import React from "react";
export const Testimonies = ({ children }) => {
	return (
		<div className="testimonies">
			<div className="testimonies__container">
				<h2>What Clients Say</h2>
				<p>
					Problems trying to resolve the conflict between the two major realms
					of Classical physics: Newtonian mechanics
				</p>
			</div>
			<div className="testimonies__content">{children}</div>
		</div>
	);
};
