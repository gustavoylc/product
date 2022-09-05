import React from "react";
import { Button } from "@components/Button";
import roundup from "@images/roundup.svg";

const WhyUs = ({ children }) => {
	return (
		<section>
			<div className="whyUs">
				<h2>Product was Built Specifically for You</h2>
				<div className="whyUs__container">{children}</div>
				<Button
					text={"SIGN UP NOW"}
					classSize={"button button__signUp"}
				></Button>
				<img
					className="whyUs__end"
					src={roundup}
				/>
			</div>
		</section>
	);
};

export { WhyUs };
