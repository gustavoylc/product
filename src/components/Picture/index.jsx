import React from 'react'

const Picture = ({ picture, classSize='Picture' }) => {
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
