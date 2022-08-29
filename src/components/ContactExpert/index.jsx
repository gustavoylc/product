import React from 'react'
import rounddown from '@images/rounddown.svg'
import { Button } from '@components/Button'

const ContactExpert = ({ experts }) => {
	return (
		<article className='contactExpert'>
			<div className='contactExpert__text'>
				<img
					className='contactExpert__start'
					src={rounddown}
				/>
				<h2>Quick & Easy Process</h2>
				<p>
					Do you require some help for your project: Conception workshop,
					prototyping, marketing strategy, landing page, UX/UI?
				</p>
			</div>
			<div className='contactExpert__container'>
				{experts.map((exp, index) =>
					index % 2 === 0 ? (
						<div
							key={exp.id}
							className='contactExpert__images'
						>
							<img
								src={exp.image}
								className={`${
									(index === 0 && 'contactExpert__images--bc-red') ||
									(index === 2 && 'contactExpert__images--bc-blue')
								}`}
							/>
							<div>
								<p>{exp.ability}</p>
							</div>
						</div>
					) : (
						<div
							key={exp.id}
							className='contactExpert__images'
						>
							<div>
								<p>{exp.ability}</p>
							</div>
							<img
								src={exp.image}
								className={`${
									(index === 1 && 'contactExpert__images--bc-green') ||
									(index === 3 && 'contactExpert__images--bc-magenta')
								}`}
							/>
						</div>
					)
				)}
			</div>
			<Button
				text={'Contact our expert'}
				classSize={'button button__contactExpert'}
			></Button>
		</article>
	)
}

export { ContactExpert }
