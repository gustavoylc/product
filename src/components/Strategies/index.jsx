import React from 'react'

const Strategies = ({ children }) => {
	return (
		<article className='Strategies'>
			<div className='Strategies__container'>
				<h2>Contents Strategies</h2>
				<p>
					We focus on ergonomics and meeting you where you work. Its only a
					keystroke away
				</p>
			</div>
			{children}
		</article>
	)
}

export { Strategies }
