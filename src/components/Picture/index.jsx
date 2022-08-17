import React from 'react'

const Picture = ({ picture, classSize }) => {
	return (
		<figure className='Picture__container'>
			<img
				className={classSize}
				src={picture}
				alt={picture}
			/>
		</figure>
	)
}

export { Picture }
