import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withApollo } from '../config/apollo';
const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3),
	},
	content: {
		marginTop: theme.spacing(1),
	},
}));
const AboutUs = () => {
	const classes = useStyles();
	return (
		<Paper className={classes.root}>
			<Typography component="h1" align="center" variant="h4">
				Who are we?
			</Typography>
			<Typography component="div" variant="body1" className={classes.content}>
				AdvertizePro LLC is online local classifieds site. We have created
				Advertize Pro with the Idea of “Advertise Like a PRO”. Either you are
				business or individual who want to promote their products or services,
				we got you covered. We help you reach your local neighborhood with free
				classified listings.
			</Typography>
		</Paper>
	);
};

export default withApollo({ ssr: true })(AboutUs);
