import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useQuery } from '@apollo/react-hooks';
import { GET_CURRENT_USER_ADVERIZEMENTS } from '../../../graphql/advertize/advertizeQueries';
import AdvertizeCardItem from '../advertize/layout/AdvertizeCardItem';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	grid: {
		zIndex: -1,
	},
}));

const UserListings = (props) => {
	const { loading, data } = useQuery(GET_CURRENT_USER_ADVERIZEMENTS);
	const classes = useStyles();

	if (loading) return <CircularProgress />;

	console.log(props);
	return (
		<Grid container spacing={4} className={classes.root}>
			{data.getCurrentUserAdvertizements.map((advertize) => (
				<Grid
					key={advertize._id}
					item
					xs={12}
					sm={6}
					md={4}
					lg={3}
					// className={classes.grid}
				>
					<AdvertizeCardItem advertize={advertize} />
				</Grid>
			))}
		</Grid>
	);
};

export default UserListings;
