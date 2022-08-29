import React from 'react'
import { Button } from '@components/Button'
import { MdPlayArrow } from 'react-icons/md'

const GetStartedContent = () => {
	return (
		<article className='getStartedContent'>
			<h2>Work at the speed of the thought</h2>
			<p>
				Tools, tutorials, design and innovation experts, all in one place! The
				most intuitive way to imagine your next user experience
			</p>

			<Button
				text={'Get started'}
				classSize={'button'}
			/>
			<a href='http://youtube.com'>
				<MdPlayArrow /> Watch the Video
			</a>
		</article>
	)
}

export { GetStartedContent }
