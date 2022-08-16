import React, { Fragment } from 'react'
import { Logo } from '@components/Logo'
import { Menu } from '@components/Menu'
import { NavBar } from '@pages/NavBar'
import { Product } from '@pages/Product'
import { GetStarted } from '@components/GetStarted'
import { Picture } from '@components/Picture'
import { GetStartedContent } from '@components/GetStartedContent'

import hero from '@images/hero.png'

const App = () => {
	return (
		<Fragment>
			<NavBar>
				<Logo></Logo>
				<Menu></Menu>
			</NavBar>
			<Product>
				<GetStarted>
					<Picture picture={hero} />
					<GetStartedContent />
				</GetStarted>
			</Product>
			{/* <Main ></Main>
			<Footer ></Footer> */}
		</Fragment>
	)
}

export { App }
