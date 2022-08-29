import React from "react";
import { Button } from "@components/Button";

const PricingCard = ({ typeCard, price }) => {	
	return (
		<div
			className={`pricingCard ${price === 10 && "selected"}`}
		>
			<h3>{typeCard}</h3>
			<p>Brief price description</p>
			<div className="pricingCard__price">
				<p className="pricingCard__number">{price}</p>
				<p className="pricingCard__symbol">$</p>
				<p className="pricingCard__text">Per / month</p>
			</div>

			<p>5+ Operators</p>
			<p>Notifications</p>
			<p>Landing Pages</p>
			<Button
				text={"Order Now"}
				classSize={"button"}
			/>
		</div>
	);
};

export { PricingCard };
