import React from 'react';
import { Typography, makeStyles, Grid, Container } from '@material-ui/core';

import { theme } from '../theme/theme';

const useStyles = makeStyles({
	container: {
		paddingTop: theme.spacing(3),
		// backgroundColor: theme.palette.common.white,
		color: theme.palette.primary.main,
		// position: 'fixed',
		// bottom: 0
	},
})

const Footer = () => {
	const classes = useStyles();

	return (
		<Container>
			<Grid container spacing={3} className={classes.container}>
				<Grid item xs={12}>
					<Typography className="smallFooter" variant="body2">
						Acknowledgements: The Center for Lung Biology and Disease is supported by the National Institute of General Medical Sciences of the National Institutes of Health under Award Number P20GM130555.
				</Typography>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Footer
