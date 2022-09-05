import React, { useState, useEffect } from "react";

export const useInterceptionObserver = (componentRef) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const { isIntersecting } = entries[0];
			console.log(isIntersecting);
			if (isIntersecting) {
				setShow(true);
                observer.disconnect()
			}
		});
		observer.observe(componentRef.current);
	}, [componentRef]);
	return true;
};
