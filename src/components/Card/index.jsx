import React from 'react'

const Card = ({ image }) => {
	return (
		<div className='card'>
			<div>
				<img
					src={image}
					alt='tech'
				/>
			</div>
			<div className='card__text'>
				<p>
					By <b>Wahid Ari | 03 March 2019</b>
				</p>
				<h3>Increasing Prosperity With Positive Thinking </h3>
			</div>
		</div>
	)
}

export { Card }
