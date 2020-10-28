import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(3),
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.text.secondary,
	},
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<Paper square className={classes.root}>
			<Container maxWidth="lg">
				<Typography align="center">
					&copy; 2020 Advertize Pro, All Rights Reserved
				</Typography>
			</Container>
		</Paper>
	);
};

export default Footer;
