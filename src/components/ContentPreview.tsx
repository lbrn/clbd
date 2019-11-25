import React, { Fragment } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ContentPreviewItem from './ContentPreviewItem';
import { featuredSeminars } from '../data/featuredSeminars';

const useStyles = makeStyles({
	previewCont: {
		display: 'flex',
		justifyContent: 'center',
	},
})

const ContentPreview = () => {
	const classes = useStyles({});
	const createFeaturedItems = (seminars) => {
		return seminars.map((seminar) => (
			<Grid container item xs={12} sm={6} justify="center" className={classes.previewCont} spacing={3}>
				<ContentPreviewItem seminar={seminar} />
			</Grid>
		))
	}
	return (
		<Fragment>
			{createFeaturedItems(featuredSeminars)}
		</Fragment>
	)
}

export default ContentPreview
