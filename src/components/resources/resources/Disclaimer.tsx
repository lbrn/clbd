import React, { Fragment } from 'react'
import { Grid, Typography } from '@material-ui/core';

const Disclaimer = ({ path }) => {
	return (
		<Fragment>
			<Grid item xs={12}>
				<Typography variant="h5">Disclaimer</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="body1">
					Awardees must acknowledge the COBRE grant support as well as COBRE Research Core support (if applicable) in publications, presentations, press releases, or other documents regarding research. 
				</Typography>
				<Typography variant="body1">
					A disclaimer should be included, such as "Research reported in this publication was supported by the National Institute of General Medical Sciences of the National Institutes of Health under P20GM130555.
				</Typography>
				<Typography variant ="body1"> 
					The content is solely the responsibility of the authors and does not necessarily represent the official views of the National Institutes of Health. 
				</Typography>
			</Grid>
		</Fragment>
	)
}

export default Disclaimer;
