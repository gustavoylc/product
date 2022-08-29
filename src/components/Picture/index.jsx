import React from 'react'

const Picture = ({ picture, classSize='picture' }) => {
	return (
		<figure className='picture__container'>
			<img
				className={classSize}
				src={picture}
				alt={picture}
			/>
		</figure>
	)
}

export { Picture }
