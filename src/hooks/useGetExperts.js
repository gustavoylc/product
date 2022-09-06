import { useEffect, useState } from "react";

const useGetExperts = () => {
	const [experts, setExperts] = useState([]);
	const abilities = [
		"I can take care of your pitch",
		"I can design your website",
		"I can help marketing strategy",
		"I can prototype your app",
	];
	const API = process.env.API;

	useEffect(() => {
		fetch(API + "?results=4")
			.then((response) => response.json())
			.then((expert) => {
				const pictures = expert.results.map((item, index) => {
					const img = item.picture.medium;
					return {
						id: `img-${index + 1}`,
						image: img,
						ability: abilities[index],
					};
				});
				setExperts(pictures);
			})
			.catch((err) => console.error(err));
	}, []);

	return experts;
};

export { useGetExperts };
