import React, { useEffect, useState } from 'react'

const useGetExperts = () => {
	const [loading, setLoading] = useState(true)
	const [experts, setExperts] = useState([])
	const abilities = [
		'I can take care of your pitch',
		'I can design your website',
		'I can help marketing strategy',
		'I can prototype your app',
	]

	useEffect(() => {
		fetch('https://randomuser.me/api/?results=4')
			.then(response => response.json())
			.then(expert => {
				const pictures = expert.results.map((item, index) => {
					const img = item.picture.medium
					return {
						id: `img-${index + 1}`,
						image: img,
						ability: abilities[index],
					}
				})
				setExperts(pictures)
				setLoading(false)
			})
			.catch(err => console.error(err))
	}, [])

	return experts
}

export { useGetExperts }