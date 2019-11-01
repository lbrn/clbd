import React, { Fragment } from 'react'
import { Grid, Typography } from '@material-ui/core';

const Disclaimer = ({ path }) => {
	return (
		<Fragment>
			<Grid item xs={12}>
				<Typography variant="h5">Disclaimer</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="body1">The content is solely the responsibility of the authors and does not necessarily represent the official views of the National Institutes of Health.</Typography>
			</Grid>
		</Fragment>
	)
}

export default Disclaimer;
