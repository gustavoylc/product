import React from 'react'

const Button = ({ text, classSize }) => {
	return (
		<div>
			<button className={classSize}>{text}</button>
		</div>
	)
}

export { Button }
