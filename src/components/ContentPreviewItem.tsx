import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles({
	preview: {
		width: '80%',
		height: 200,
		backgroundColor: 'rgba(255, 255, 255, .5)',
	},

})

interface seminar {
	date: string;
	time: string;
	speakers: string;
	cost: string;
	location: string;
	img: string;
	title: string;
}
interface contentPreviewItemProps {
	seminar: seminar;
}

const ContentPreviewItem = ({ seminar }: contentPreviewItemProps) => {
	const classes = useStyles();

	return (
		<Grid container item xs={8} className={classes.preview} spacing={3}>
			<Grid container xs={4}>
				<img src={seminar.img} />
			</Grid>
			<Grid container xs={8}>
				<Grid item xs={12}>
					<Typography align="center" variant="h5">
						{seminar.title}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography align="center" variant="body1">
						{seminar.location}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography align="center" variant="body1">
						{seminar.date}
					</Typography>
				</Grid>
			</Grid>

		</Grid>
	)
}

export default ContentPreviewItem
