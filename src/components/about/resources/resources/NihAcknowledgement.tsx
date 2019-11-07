import React, { Fragment } from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	template: {
		backgroundColor: `rgba(19, 127, 222, .2)`,
	}
})

const NihAcknowledgement = ({path}) => {
	const classes = useStyles({})
	return (
		<Fragment>
				<Grid item xs={12}>
					<Typography variant="h5">
						NIH acknowledgement
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body1">
						So that we can most effectively communicate the scope and results of our funding support, we would like to know when you are planning news announcements about IDeA awards or program activities and achievements…
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body1">
						When you produce such material, please be sure to identify the IDeA program, not just COBRE or a sub-program, and to provide context about the program’s goals along the lines of:
					</Typography>
				</Grid>
				<Grid className={classes.template} item xs={12}>
					<Typography variant="body1">
						The University of _________ has received $XXX from the National Institutes of Health (NIH) to support an Institutional Development Award (IDeA) Center of Biomedical Research Excellence. The IDeA program builds research capacities in states that historically have had low levels of NIH funding by supporting basic, clinical and translational research; faculty development; and infrastructure improvements.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body1">
						In journal articles, news releases, or other materials about your program’s activities or achievements, please use funding acknowledgement language such as:					</Typography>
				</Grid>
				<Grid className={classes.template} item xs={12}>
					<Typography variant="body1">
						{/* Double curly braces are to escape first set: 
						https://github.com/facebook/react/issues/1545 */}
						Research reported in this {'{publication, release}'} was supported by an Institutional Development Award (IDeA) from the National Institute of General Medical Sciences of the National Institutes of Health under grant number P20GM130555
					</Typography>
				</Grid>
		</Fragment>
	)
}

export default NihAcknowledgement
