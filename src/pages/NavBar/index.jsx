import React from 'react'
import { Logo } from '@components/Logo'
import { Menu } from '@components/Menu'

const NavBar = () => {
	return (
		<nav className='navBar'>
			<div className='navBar__logo'>
				<Logo />
			</div>
			<div className='navBar__menu'>
				<Menu />
			</div>
		</nav>
	)
}

export { NavBar }
