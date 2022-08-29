import React, { Fragment } from "react";
import { PricingCard } from "@components/PricingCard";

const Pricing = () => {
	const prices = [5, 10, 15];
	const types = ["Free", "Standard", "Premium"];
	return (
		<Fragment>
			<article className="pricing ">
				<h2>Price Table</h2>
				<p>We offer competitive price</p>

				<div className="pricing__carrousel">
					<div className="pricing__carrousel--cards">
						{prices.map((price, index) => (
							<PricingCard
								key={price}
								typeCard={types[index]}
								price={price}
							/>
						))}
					</div>
				</div>
			</article>
		</Fragment>
	);
};

export { Pricing };
