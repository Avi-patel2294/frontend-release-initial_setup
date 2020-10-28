import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_ADVERIZEMENTS } from '../../../../graphql/advertize/advertizeQueries';
import AdvertizeCardItem from './AdvertizeCardItem';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	grid: {
		zIndex: -1,
	},
}));

const AdvertizeCardsContainer = () => {
	const { loading, data } = useQuery(GET_ALL_ADVERIZEMENTS);
	const classes = useStyles();

	if (loading) return <CircularProgress />;
	return (
		<Grid container spacing={4} className={classes.root}>
			{data &&
				data.getAllAdvertizements.map((advertize) => (
					<Grid key={advertize._id} item xs={6} sm={6} md={4} lg={3}>
						<AdvertizeCardItem advertize={advertize} />
					</Grid>
				))}
		</Grid>
	);
};
export default AdvertizeCardsContainer;
