import React, { Fragment } from 'react'
import { Logo } from '@components/Logo'
import { Menu } from '@components/Menu'
import { NavBar } from '@pages/NavBar'
import { Product } from '@pages/Product'
import { GetStarted } from '@components/GetStarted'
import { Picture } from '@components/Picture'
import { GetStartedContent } from '@components/GetStartedContent'
import { WhyUs } from '@components/WhyUs'
import { Skill } from '@components/Skill'

import hero from '@images/hero.png'
import arrow from '@images/skills/arrow.svg'
import design from '@images/skills/design.svg'
import preference from '@images/skills/preference.svg'
import tests from '@images/skills/tests.svg'

const App = () => {
	return (
		<Fragment>
			<NavBar>
				<Logo></Logo>
				<Menu></Menu>
			</NavBar>
			<Product>
				<GetStarted>
					<Picture
						picture={hero}
						classSize={'Picture__getstarted'}
					/>
					<GetStartedContent />
				</GetStarted>
				<WhyUs>
					<Skill>
						<Picture
							picture={arrow}
							classSize={'Picture__skill'}
						></Picture>
						<h3>First click tests</h3>
						<h4>While most people enjoy casino gambling</h4>
					</Skill>
					<Skill>
						<Picture
							picture={design}
							classSize={'Picture__skill'}
						></Picture>
						<h3>Design surveys</h3>
						<h4>Sports betting, lottery and bingo playing for the fun</h4>
					</Skill>
					<Skill>
						<Picture
							picture={preference}
							classSize={'Picture__skill'}
						></Picture>
						<h3>Preference test</h3>
						<h4>The Myspace page defines the individual</h4>
					</Skill>
					<Skill>
						<Picture
							picture={tests}
							classSize={'Picture__skill'}
						></Picture>
						<h3>Five second tests</h3>
						<h4>Personal choices and the overall personality of the person</h4>
					</Skill>
				</WhyUs>
			</Product>
		</Fragment>
	)
}

export { App }
