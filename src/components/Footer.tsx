import React from 'react';
import { Typography, makeStyles, Grid, Container, Link } from '@material-ui/core';

import { theme } from '../theme/theme';

const useStyles = makeStyles({
	container: {
		paddingTop: theme.spacing(3),
		backgroundColor: theme.palette.common.white,
	},
})

const Footer = () => {
	const classes = useStyles();

	return (
		<Container>
			<Grid container spacing={3} className={classes.container}>
				<Grid container item xs={6} sm={4}>
					<Grid item xs>
						<Link href="http://lsu.edu/accessibility">Accessibility statement</Link>
					</Grid>
					<Grid item xs>
						<Link href="http://lsu.edu/feedback">Provide Feedback</Link>
					</Grid>
				</Grid>
				<Grid item xs={6} sm={8}>
					<Typography className="smallFooter" variant="body2">
						Acknowledgements: The Center for Lung Biology and Disease is supported by the National Institute of General Medical Sciences of the National Institutes of Health under Award Number P20GM130555.
					</Typography>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Footer
