import React from 'react'
import logo from '@images/favicon/favicon-32x32.png'

const Logo = () => {
	return (
		<div className='logo'>
			<a href='http://localhost:8080/'>
				<div className='logo__container'>
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
