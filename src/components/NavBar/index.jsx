import React from 'react'
import { Logo } from '@components/Logo'
import { Menu } from '@components/Menu'

const NavBar = () => {
	return (
		<nav className='NavBar'>
			<div className='NavBar__Logo'>
				<Logo />
			</div>
			<div className='NavBar__Menu'>
				<Menu />
			</div>
		</nav>
	)
}

export { NavBar }
