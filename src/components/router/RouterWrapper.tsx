import React, { Fragment } from "react";
import { Router } from "@reach/router";

import Hero from "../Hero";
import About from "../about/About";
import Seminars from "../seminars/Seminars";
import Seminar from "../seminars/Seminar";
import Resources from "../about/resources/Resources";
import NihAcknowledgement from "../about/resources/resources/NihAcknowledgement";
import PeopleCont from "../people/PeopleCont";
import PersonDetails from "../people/PersonDetails";
import People from "../people/People";
import Disclaimer from "../about/resources/resources/Disclaimer";
import Core from "../about/resources/resources/Core";
import UsefulLinks from "../about/resources/resources/UsefulLinks";
import Articles from "../about/resources/resources/Articles";

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
