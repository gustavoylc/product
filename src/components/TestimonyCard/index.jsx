import React from "react";
import { MdStarRate, MdStarOutline } from "react-icons/md";

const TestimonyCard = ({ stars, client, rol }) => {
	return (
		<div className="testimonyCard">
			<div>
				{stars.map((star, i) =>
					star === "full" ? (
						<MdStarRate
							key={star + i}
							color="#F3CD03"
						/>
					) : (
						<MdStarOutline
							key={star + i}
							color="#F3CD03"
						/>
					)
				)}
			</div>
			<p>
				Product helps you see how many more days you need to work to reach your
				financial goal
			</p>
			<div className="testimonyCard__client">
				<img src={client.image} />
				<p className="testimonyCard__client--name">Wahid Ari</p>
				<p className="testimonyCard__client--rol">{rol}</p>
			</div>
		</div>
	);
};

export { TestimonyCard };
