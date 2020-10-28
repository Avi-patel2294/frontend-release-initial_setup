import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FeatherIcon from 'feather-icons-react';
import { useQuery } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import { GET_PARENT_CATEGORIES } from '../../../../graphql/categories/CategoriesQuery';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
		marginBottom: theme.spacing(3),
	},
	vAlign: {
		display: 'flex',
		alignItems: 'center',
	},
	icon: {
		marginRight: theme.spacing(2),
	},
}));

const HomePageSearch = () => {
	const classes = useStyles();
	const [searchKeyword, setSearchKeyword] = useState('');
	const { loading, data } = useQuery(GET_PARENT_CATEGORIES);
	return (
		<Paper className={classes.root} elevation={10}>
			<Grid className={classes.vAlign} container spacing={4}>
				<Grid item xs={12} sm={3}>
					<TextField fullWidth select variant="outlined">
						<MenuItem>All</MenuItem>
						{data && data.getParentCategories
							? data.getParentCategories.map((category) => {
									return (
										<MenuItem key={category._id}>{category.name}</MenuItem>
									);
							  })
							: null}
					</TextField>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						variant="outlined"
						fullWidth
						placeholder="Search avdertize"
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<Button
						variant="contained"
						className={classes.vAlign}
						fullWidth
						color="secondary"
					>
						<FeatherIcon size={16} className={classes.icon} icon="search" />{' '}
						Search
					</Button>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default HomePageSearch;
