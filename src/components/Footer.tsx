import React from 'react';
import { Typography, makeStyles, Grid, Container } from '@material-ui/core';

import { theme } from '../theme/theme';

const useStyles = makeStyles({
	container: {
		paddingTop: theme.spacing(3),
		// backgroundColor: theme.palette.common.white,
		color: theme.palette.primary.main,
	},
})

const Footer = () => {
	const classes = useStyles();

	return (
		<Container>
			<Grid container spacing={3} className={classes.container}>
				<Grid item xs={12}>
					<Typography className="smallFooter" variant="body2" align="center">
						Acknowledgements: The Center for Lung Biology and Disease is supported by the National Institute of General Medical Sciences of the National Institutes of Health under Award Number P20GM130555.
						The content of this web and research reported in articles resulting from work conducted under this grant are entirely the responsibility of the authors and does not reflect the
						views of the National Institute of General Medical Sciences.
				</Typography>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Footer
