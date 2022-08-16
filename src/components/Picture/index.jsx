import React from 'react'

const Picture = ({ picture }) => {
	return (
		<figure>
			<img
				className='Picture'
				src={picture}
				alt={picture}
			/>
		</figure>
	)
}

export { Picture }
