import React from "react";
import { makeStyles, Typography, Grid, Link } from "@material-ui/core";
import { theme } from "../theme/theme";
import { navigate } from "@reach/router";
// import { seminars } from "../models/seminars";

const useStyles = makeStyles({
	preview: {
		width: "80%",
		height: 200,
		backgroundColor: "rgba(255, 255, 255, .6)"
	},
	img: {
		objectFit: "cover",
		width: "100%"
	},
	title: {
		paddingTop: theme.spacing(3)
	}
});

interface contentPreviewItemProps {
	featured: any;
	id: number;
}

const ContentPreviewItem = ({ featured, id }: contentPreviewItemProps) => {
	const classes = useStyles();

	return (
		<Grid container item xs={8} className={classes.preview}>
			<Grid container item xs={4}>
				<img
					src={featured.image}
					className={classes.img}
					alt={`image for ${featured.title}`}
				/>
			</Grid>
			<Grid container item xs={8}>
				{featured.title && (
					<Grid item xs={12}>
						<Typography
							align='center'
							variant='h5'
							className={classes.title}
						>
							{featured.title}
						</Typography>
					</Grid>
				)}
				{featured.location && (
					<Grid item xs={12}>
						<Typography align='center' variant='body1'>
							{featured.location && featured.location}
						</Typography>
					</Grid>
				)}
				{featured.date && (
					<Grid item xs={12}>
						<Typography align='center' variant='body1'>
							{featured.date.format("MM/DD/YY")}
						</Typography>
					</Grid>
				)}
				{featured.link && (
					<Grid item xs={12}>
						{/* on click = navigate => featured */}
						<Typography
							align='center'
							// {/* // onClick={e => navigate(`/event/${id}`)} */}
						>
							<Link href={featured.link}>view details</Link>
						</Typography>
					</Grid>
				)}
			</Grid>
		</Grid>
	);
};

export default ContentPreviewItem;
