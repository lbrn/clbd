import React, { Fragment } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ContentPreviewItem from './ContentPreviewItem';
import { seminars } from '../data/seminars';

const useStyles = makeStyles({
	previewCont: {
		display: 'flex',
		justifyContent: 'center',
	},
})

const ContentPreview = () => {
	const classes = useStyles({});
	const featuredSeminars = seminars.slice(0,2)
	
	const createFeaturedItems = (seminars) => {
		return seminars.map((seminar, index) => (
			<Grid container item xs={12} md={6} justify="center" className={classes.previewCont} key={index}>
				<ContentPreviewItem seminar={seminar} id={index}/>
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
