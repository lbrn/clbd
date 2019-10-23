import React from 'react';
import { Typography, Grid, Container } from '@material-ui/core';

const About = ({ path }) => {
	return (
		<Container>
			<Grid container spacing={3} xs={12}>
				<Grid item xs={12}>
					<Typography>
						Welcome to the Louisiana Center for Lung Biology and Disease (CLBD) Web. The Center was established in 2019 through an 11.6 million dollar grant from the National Institutes of Health-funded Centers of Biomedical Research Excellence (COBRE). The interdisciplinary faculty of the CLBD come from the Departments of Pathobiological Sciences and Comparative Biomedical Sciences at the School of Veterinary Medicine.
						The Center is committed to excellence in research and mentoring related to lung diseases. The Center is highly interactive and consists of a dynamic group of junior investigators whose research focus is on understanding the molecular and cellular immunological mechanisms associated with the pathogenesis of infectious and non-infectious lung diseases using molecular, immunological, and pathological approaches in mouse models. They also use human samples to validate their findings from preclinical models. The research projects are supported by two scientific cores, the Pulmonary Immunopathology (PIP) Core and the Molecular Biology (MB) Core. The Administrative Core (AC) will coordinate the activities of the individual projects and cores, and includes a panel of mentors with outstanding experience in lung disease research.
						The Center has assembled senior scientists with outstanding track records to serve on the Internal Scientific and Advisory Committee (ISAC) and Mentoring Committee (MC) that carefully evaluate the scientific needs of each junior investigator and tailor the mentoring plan based on the individual’s need. Senior scientists with exceptional track records are included in the external advisory board (EAB). The long-term goal is to establish a collaborative, productive, sustainable, and nationally/internationally recognized Center of Excellence (COE) in Pulmonary Disease research. The Center will provide novel insights into the pathogenesis of devastating lung diseases that guide future improved strategies for treating and preventing these and other lung diseases in the human population.
					</Typography>
				</Grid>
			</Grid>
		</Container>
	)
}

export default About
