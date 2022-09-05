import React from "react";
import { MdCheck } from "react-icons/md";

const Customer = ({ children }) => {
	return (
		<article className="customer">
			<div className="customer__content">
				{children}
				<div>
					<h4>Easier decision making for</h4>
					<h2>Customer Support</h2>
					<p>
						The Myspace page defines the individual, his or her characteristics,
						traits, personal choices and the overall personality of the person
					</p>
					<div className="customer__container">
						<div>
							<MdCheck className="customer__container--check customer__container--bgc-orange" />
						</div>
						<div>
							<p>Never worry about overpaying for your energy again</p>
						</div>
						<div>
							<MdCheck className="customer__container--check customer__container--bgc-red" />
						</div>
						<div>
							<p>
								We will only switch you to energy companies that we trust and
								will treat you right
							</p>
						</div>
						<div>
							<MdCheck className="customer__container--check customer__container--bgc-blue" />
						</div>
						<div>
							<p>We track the markets daily and know where the savings</p>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export { Customer };
