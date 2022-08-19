import React from 'react'
import rounddown from '@images/rounddown.svg'
import { Button } from '@components/Button'

const ContactExpert = ({ experts }) => {
	return (
		<article className='ContactExpert'>
			<div className='ContactExpert__text'>
				<img
					className='ContactExpert__start'
					src={rounddown}
				/>
				<h2>Quick & Easy Process</h2>
				<p>
					Do you require some help for your project: Conception workshop,
					prototyping, marketing strategy, landing page, UX/UI?
				</p>
			</div>
			<div className='ContactExpert__container'>
				{experts.map((exp, index) =>
					index % 2 === 0 ? (
						<div
							key={exp.id}
							className='ContactExpert__images'
						>
							<img
								src={exp.image}
								className={`${
									(index === 0 && 'ContactExpert__images--bc-red') ||
									(index === 2 && 'ContactExpert__images--bc-blue')
								}`}
							/>
							<div>
								<p>{exp.ability}</p>
							</div>
						</div>
					) : (
						<div
							key={exp.id}
							className='ContactExpert__images'
						>
							<div>
								<p>{exp.ability}</p>
							</div>
							<img
								src={exp.image}
								className={`${
									(index === 1 && 'ContactExpert__images--bc-green') ||
									(index === 3 && 'ContactExpert__images--bc-magenta')
								}`}
							/>
						</div>
					)
				)}
			</div>
			<Button
				text={'Contact our expert'}
				classSize={'Button Button__ContactExpert'}
			></Button>
		</article>
	)
}

export { ContactExpert }
