import React from 'react'

const Button = ({ text, classSize = 'button'}) => {
	return (
		<div>
			<button className={classSize}>{text}</button>
		</div>
	)
}

export { Button }
