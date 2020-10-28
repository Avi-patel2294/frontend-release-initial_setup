import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FeatherIcon from 'feather-icons-react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	nav: {
		width: '100%',
		borderRadius: 0,
		padding: 0,
		border: '1px solid rgba(5, 145, 160, .3)',
	},
	navItem: {
		padding: '12px 15px',
		borderBottom: '1px solid rgba(5, 145, 160, .3)',
		'&:hover': {
			background: 'rgba(5, 145, 160, .1)',
		},
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	label: {
		fontSize: '1.2rem',
	},
}));
const SelectCategoryList = ({ categoryDetails, handleOnClick }) => {
	const classes = useStyles();
	return (
		Array.isArray(categoryDetails) &&
		categoryDetails.length > 0 && (
			<List
				className={classes.nav}
				component="nav"
				aria-label="Select Category"
			>
				{categoryDetails.map((category) => {
					return (
						<ListItem
							className={classes.navItem}
							button
							key={category._id}
							onClick={() =>
								handleOnClick(category._id, category.name, category.count)
							}
						>
							<Typography
								component="span"
								color="secondary"
								className={classes.label}
							>
								{category.name}
							</Typography>
							{category.count > 0 ? <FeatherIcon icon="chevron-right" /> : null}

							{/* <ListItemText primary={category.name} /> */}
						</ListItem>
					);
				})}
			</List>
		)
	);
};

export default SelectCategoryList;
