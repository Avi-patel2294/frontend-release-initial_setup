import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/react-hooks';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GET_ADVERIZEMENTS_BY_CATEGORY } from '../../../graphql/advertize/advertizeQueries';
import { withApollo } from '../../../config/apollo';
import AdvertizeListItem from '../../../src/components/advertize/layout/AdvertizeListItem';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

const CategoryListings = () => {
	const classes = useStyles();
	const router = useRouter();
	const { categoryId, categorySlug } = router.query;

	const { loading, data } = useQuery(GET_ADVERIZEMENTS_BY_CATEGORY, {
		variables: {
			categoryId: categoryId,
		},
	});

	if (loading) return <CircularProgress />;

	console.log(data);
	return (
		<Grid container className={classes.root}>
			{data.getAdvertizementsByCategory.map((advertize) => (
				<AdvertizeListItem key={advertize._id} advertize={advertize} />
			))}
		</Grid>
	);
};

export default withApollo({ ssr: true })(CategoryListings);
