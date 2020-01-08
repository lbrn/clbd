import React, { Fragment } from "react";
import { Router } from "@reach/router";

import Hero from "../components/Hero";
import About from "../components/about/About";
import Seminars from "../components/seminars/Seminars";
import Seminar from "../components/seminars/Seminar";
import Resources from "../components/about/resources/Resources";
import NihAcknowledgement from "../components/about/resources/resources/NihAcknowledgement";
import PeopleCont from "../components/people/PeopleCont";
import PersonDetails from "../components/people/PersonDetails";
import People from "../components/people/People";
import Disclaimer from "../components/about/resources/resources/Disclaimer";
import Core from "../components/about/resources/resources/Core";
import UsefulLinks from "../components/about/resources/resources/UsefulLinks";
import Articles from "../components/about/resources/resources/Articles";

const RouterWrapper = () => {
	return (
		<Fragment>
			<Router>
				{/* <HeroStory path="/"/> */}
				<Hero path='/' />
				<About path='about' />
				<PeopleCont path='people'>
					<People path='/' />
					<PersonDetails path='individual/:name' />
				</PeopleCont>
				<Seminars path='events' />
				<Seminar path='event/:seminarIndex' />
				<Resources path='resources'>
					<NihAcknowledgement path='nih' />
					<Disclaimer path='disclaimer' />
					<UsefulLinks path='useful-links' />
					<Articles path='articles' />
					<Core
						path='core/:name'
						links={[
							{
								title: "Amazon",
								link: "https://www.amazon.com"
							}
						]}
					/>
				</Resources>
			</Router>
		</Fragment>
	);
};

export default RouterWrapper;
