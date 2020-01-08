import React, { Fragment } from 'react'
import { Grid, Typography, Link } from '@material-ui/core';
import { navigate } from '@reach/router';

export const Articles = (props) => {

	return (
		<Fragment>
			<Grid item xs={12}>
				<Typography variant="h5">Articles</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography onClick={e => navigate('https://www.lsu.edu/mediacenter/news/2019/02/04svm_jeyaseelan_nihcenter.php')} variant="body1">
					<Link>
						11.5 Million Dollar Grant
					</Link>
				</Typography>
				<Typography onClick={e => navigate('https://www.amazon.com/LOUD-LUNGS-Designer-Plush-Figure/dp/B008V03Y2W')} variant="body1">
					<Link>
						Here's a nice plush toy
					</Link>
				</Typography>
			</Grid>
		</Fragment>
	)
}

export default Articles;