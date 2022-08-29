import React from "react";
import { TestimonyCard } from "@components/TestimonyCard";

export const Testimonies = ({children}) => {
  
	return (
		<div className="testimonies">
			<div className="testimonies__container">
				<h2>What Clients Say</h2>
				<p>
					Problems trying to resolve the conflict between the two major realms
					of Classical physics: Newtonian mechanics
				</p>
			</div>
			{children}
		</div>
	);
};
