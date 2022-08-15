import React from 'react'
import logo from '@images/favicon/favicon-32x32.png'

const Logo = () => {
	return (
		<div>
			<a href='http://localhost:8080/'>
				<div className='Logo'>
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
