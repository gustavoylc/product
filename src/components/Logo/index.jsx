import React from 'react'
import logo from '@images/favicon/favicon-32x32.png'

const Logo = () => {
	return (
		<div className='Logo'>
			<a href='http://localhost:8080/'>
				<div className='Logo__container'>
					<img
						src={logo}
						alt='Logo'
					/>
					<p>Product</p>
				</div>
			</a>
		</div>
	)
}

export { Logo }
