import React from 'react'
import { Button } from '@components/Button'

import roundup from '@images/roundup.svg'

const WhyUs = ({children}) => {
	return (
		<section className='WhyUs'>
			<h2>Product was Built Specifically for You</h2>
			{children}
			<Button
				text={'SIGN UP NOW'}
				classSize={'Button Button__SignUp semi-circle2'}
			></Button>
			<img
				className='WhyUs__end'
				src={roundup}
			/>
		</section>
	)
}

export { WhyUs }
