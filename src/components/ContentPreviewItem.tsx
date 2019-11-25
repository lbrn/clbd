import React from 'react';
import { makeStyles, Typography, Grid, Link } from '@material-ui/core';
import { theme } from '../theme/theme';
import { navigate } from '@reach/router';
import { seminar } from '../models/seminar';

const useStyles = makeStyles({
	preview: {
		width: '80%',
		height: 200,
		backgroundColor: 'rgba(255, 255, 255, .6)',
	},
	img: {
		objectFit: 'cover',
		width: '100%'
	},
	title: {
		paddingTop: theme.spacing(3)
	}
})

interface contentPreviewItemProps {
	seminar: seminar;
	id: number
}

const ContentPreviewItem = ({ seminar, id }: contentPreviewItemProps) => {
	const classes = useStyles();

	return (
		<Grid container item xs={8} className={classes.preview}>
			<Grid container item xs={4}>
				<img src={seminar.image} className={classes.img} alt={`image for ${seminar.name}`}/>
			</Grid>
			<Grid container item xs={8}>
				<Grid item xs={12}>
					<Typography align="center" variant="h5" className={classes.title}>
						{seminar.name}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography align="center" variant="body1">
						{seminar.location && seminar.location}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography align="center" variant="body1">
						{seminar.date.format('MM/DD/YY')}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					{/* on click = navigate => featured */}
					<Typography align="center" onClick={e => navigate(`/event/${id}`)}>
						<Link>view details</Link>
					</Typography>
				</Grid>
			</Grid>

		</Grid>
	)
}

export default ContentPreviewItem
