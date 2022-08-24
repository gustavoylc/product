import React, { useEffect, useState } from 'react'

const useGetTechImages = () => {
	const [images, setImages] = useState([])

	useEffect(() => {
		const getRandomNumber = () => {
			return Math.random() * (0.9 - 0.1) + 0.1
		}
		const images = []
		for (let index = 0; index < 10; index++) {
			images.push(
				`https://placeimg.com/250/130/tech?r=${getRandomNumber().toFixed(16)}`
			)
		}
		setImages(images)
	}, [])

	return images
}

export { useGetTechImages }
