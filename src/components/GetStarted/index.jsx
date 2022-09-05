import React, { useEffect, useRef, useState } from "react";

export const GetStarted = ({ children }) => {
	const element = useRef(null);
	const [show, setShow] = useState(false);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const { isIntersecting } = entries[0];
			if (isIntersecting) {
				setShow(true);
				observer.disconnect();
			}
		});
		observer.observe(element.current);
	}, [element]);
	return (
		<section ref={element}>
			{show && <div className="getStarted"> {children}</div>}
		</section>
	);
};
