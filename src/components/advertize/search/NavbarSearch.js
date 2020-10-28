import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import FeatherIcon from 'feather-icons-react';

const useStyles = makeStyles((theme) => ({
	root: {
		marginRight: theme.spacing(3),
		marginLeft: theme.spacing(3),
		display: 'flex',
		flexGrow: 1,
		// border: `${theme.spacing(0.25)}px solid ${theme.palette.primary.main}`,
		// borderRadius: theme.spacing(10),
		color: theme.palette.secondary.main,
	},
	input: {
		marginLeft: theme.spacing(2.5),
		marginRight: theme.spacing(2),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
}));
const NavbarSearch = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{/* <InputBase
				className={classes.input}
				placeholder="Search Advertize"
				inputProps={{ 'aria-label': 'search google maps' }}
				color="secondary"
			/>
			<IconButton
				type="submit"
				className={classes.iconButton}
				aria-label="search"
				color="secondary"
			>
				<FeatherIcon icon="search" />
			</IconButton> */}
		</div>
	);
};

export default NavbarSearch;
