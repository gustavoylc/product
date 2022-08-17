import React from 'react'
import { MdCheck } from 'react-icons/md'

const Customer = ({ children }) => {
	return (
		<article className='Customer'>
			{children}
			<h4>Easier decision making for</h4>
			<h2>Customer Support</h2>
			<p>
				The Myspace page defines the individual, his or her characteristics,
				traits, personal choices and the overall personality of the person
			</p>
			<div className='Customer__container'>
				<div>
					<MdCheck className='Customer__container--check Customer__container--bgc-orange' />
				</div>
				<div>
					<p>Never worry about overpaying for your energy again</p>
				</div>
				<div>
					<MdCheck className='Customer__container--check Customer__container--bgc-red' />
				</div>
				<div>
					<p>
						We will only switch you to energy companies that we trust and will
						treat you right
					</p>
				</div>
				<div>
					<MdCheck className='Customer__container--check Customer__container--bgc-blue' />
				</div>
				<div>
					<p>We track the markets daily and know where the savings</p>
				</div>
			</div>
		</article>
	)
}

export { Customer }
