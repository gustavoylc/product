import React, { Fragment } from "react";
import { NavBar } from "@pages/NavBar";
import { Product } from "@pages/Product";
import { Footer } from "@pages/Footer";
import { Logo } from "@components/Logo";
import { Menu } from "@components/Menu";
import { GetStarted } from "@components/GetStarted";
import { Picture } from "@components/Picture";
import { GetStartedContent } from "@components/GetStartedContent";
import { WhyUs } from "@components/WhyUs";
import { Skill } from "@components/Skill";
import { Management } from "@components/Management";
import { Customer } from "@components/Customer";
import { Optimization } from "@components/Optimization";
import { ContactExpert } from "@components/ContactExpert";
import { CardsList } from "@components/CardsList";
import { useGetExperts } from "@hooks/useGetExperts";
import { useGetTechImages } from "@hooks/useGetTechImages";
import { Pricing } from "@components/Pricing";
import { Marketing } from "@components/Marketing";
import { SocialMedia } from "@components/SocialMedia";

import hero from "@images/hero.png";
import getjob from "@images/getjob.png";
import arrow from "@images/skills/arrow.svg";
import design from "@images/skills/design.svg";
import preference from "@images/skills/preference.svg";
import tests from "@images/skills/tests.svg";
import comfort from "@images/comfort.png";
import market from "@images/market.png";
import { Strategies } from "@components/Strategies";
import { Testimonies } from "@components/Testimonies";
import { TestimonyCard } from "@components/TestimonyCard";

const App = () => {
	const experts = useGetExperts();
	const images = useGetTechImages();
	const stars = ["full", "full", "full", "full", "empty"];
	const rol = ["Designer", "FrontEnd", "Analyst"];

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
				<WhyUs>
					<Skill>
						<Picture
							picture={arrow}
							classSize={"picture__skill"}
						></Picture>
						<h3>First click tests</h3>
						<p>While most people enjoy casino gambling</p>
					</Skill>
					<Skill>
						<Picture
							picture={design}
							classSize={"picture__skill"}
						></Picture>
						<h3>Design surveys</h3>
						<p>Sports betting, lottery and bingo playing for the fun</p>
					</Skill>
					<Skill>
						<Picture
							picture={preference}
							classSize={"picture__skill"}
						></Picture>
						<h3>Preference test</h3>
						<p>The Myspace page defines the individual</p>
					</Skill>
					<Skill>
						<Picture
							picture={tests}
							classSize={"picture__skill"}
						></Picture>
						<h3>Five second tests</h3>
						<p>Personal choices and the overall personality of the person</p>
					</Skill>
				</WhyUs>
				<Management>
					<Picture picture={getjob} />
				</Management>
				<Customer>
					<Picture picture={comfort} />
				</Customer>
				<Optimization>
					<Picture picture={market} />
				</Optimization>
				<ContactExpert experts={experts} />
				<Strategies>
					<CardsList images={images} />
				</Strategies>
				<Pricing />
				<Testimonies>
					{experts.map(
						(client, i) =>
							i < 3 && (
								<TestimonyCard
									key={client + i}
									stars={stars}
									client={client}
									rol={rol[i]}
								/>
							)
					)}
				</Testimonies>
				<Marketing />
			</Product>
			<Footer>
				<Logo></Logo>
				<SocialMedia/>
			</Footer>
		</Fragment>
	);
};

export { App };
