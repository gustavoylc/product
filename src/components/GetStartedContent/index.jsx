import React from 'react'
import { Button } from '@components/Button'
import { MdPlayArrow } from 'react-icons/md'

const GetStartedContent = () => {
	return (
		<article className='GetStartedContent'>
			<h2>Work at the speed of the thought</h2>
			<h4>
				Tools, tutorials, design and innovation experts, all in one place! The
				most intuitive way to imagine your next user experience
			</h4>
      
			<Button text={'Get started'} />
			<a href='http://youtube.com'>
				<MdPlayArrow /> Watch the Video
			</a>
		</article>
	)
}

export { GetStartedContent }
