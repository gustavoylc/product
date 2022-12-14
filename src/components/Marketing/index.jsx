import React from 'react'
import { Button } from '@components/Button'
import cta from "@images/cta.png";

export const Marketing = () => {
  return (
		<article className="marketing">
			<div className="marketing__container">
				<div className="marketing__container--content">
					<h2>Join 100 Companies who boost their business with Product</h2>
					<Button
						text="Get This"
						classSize="button button__invert"
					></Button>
				</div>
				<img
					src={cta}
					alt="cta"
				/>
			</div>
		</article>
	);
}
