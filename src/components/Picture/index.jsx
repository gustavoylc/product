import React from 'react'

const Picture = ({ picture, classSize }) => {
	return (
		<figure>
			<img
				className={classSize}
				src={picture}
				alt={picture}
			/>
		</figure>
	)
}

export { Picture }
