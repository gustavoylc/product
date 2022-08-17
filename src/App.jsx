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
import { Management } from './components/Management'

import hero from '@images/hero.png'
import getjob from '@images/getjob.png'
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
						classSize={'Picture'}
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
						<p>While most people enjoy casino gambling</p>
					</Skill>
					<Skill>
						<Picture
							picture={design}
							classSize={'Picture__skill'}
						></Picture>
						<h3>Design surveys</h3>
						<p>Sports betting, lottery and bingo playing for the fun</p>
					</Skill>
					<Skill>
						<Picture
							picture={preference}
							classSize={'Picture__skill'}
						></Picture>
						<h3>Preference test</h3>
						<p>The Myspace page defines the individual</p>
					</Skill>
					<Skill>
						<Picture
							picture={tests}
							classSize={'Picture__skill'}
						></Picture>
						<h3>Five second tests</h3>
						<p>Personal choices and the overall personality of the person</p>
					</Skill>
				</WhyUs>
				<Management>
					<Picture
						picture={getjob}
						classSize={'Picture'}
					/>
				</Management>
			</Product>
		</Fragment>
	)
}

export { App }
