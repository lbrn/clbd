import React, { Fragment } from 'react'
import { Grid, Typography, Link } from '@material-ui/core';
import { navigate } from '@reach/router';

export const UsefulLinks = (props) => {

	return (
		<Fragment>
			<Grid item xs={12}>
				<Typography variant="h5">Useful Links</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography onClick={e => navigate('https://lacatsfunding.pbrc.edu/lacobres/Default.aspx')} variant="body1">
					<Link>
						Louisiana Clinical & Translations Science Center
					</Link>
				</Typography>
				<Typography onClick={e => navigate('https://lbrn.lsu.edu/')} variant="body1">
					<Link>
						Louisiana Biomedical Research Network
					</Link>
				</Typography>
			</Grid>
		</Fragment>
	)
}

export default UsefulLinks;

