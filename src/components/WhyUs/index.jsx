import React from 'react'
import { Button } from '@components/Button'

import roundup from '@images/roundup.svg'

const WhyUs = ({children}) => {
	return (
		<section className='whyUs'>
			<h2>Product was Built Specifically for You</h2>
			{children}
			<Button
				text={'SIGN UP NOW'}
				classSize={'button button__signUp'}
			></Button>
			<img
				className='whyUs__end'
				src={roundup}
			/>
		</section>
	)
}

export { WhyUs }
