import React from "react";
import { Card } from "@components/Card";

const CardsList = ({ images }) => {
	return (
		<div>
			<div className="cardsList">
				{images.map((image) => (
					<Card
						key={image}
						image={image}
					></Card>
				))}
			</div>
		</div>
	);
};

export { CardsList };
