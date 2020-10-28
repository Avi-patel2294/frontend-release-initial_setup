import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { get } from 'lodash';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/react-hooks';
import { GET_ADVERIZEMENTS } from '../../../../graphql/advertize/advertizeQueries';
import AdvertizeListItem from './AdvertizeListItem';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	pagination: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
	ul: {
		justifyContent: 'center',
	},
}));

const AdvertizeList = () => {
	const [page, setPage] = useState(1);
	const [skip, setSkip] = useState(0);
	const { loading, data } = useQuery(GET_ADVERIZEMENTS, {
		variables: {
			first: 2,
			skip: skip,
		},
	});
	const classes = useStyles();

	const handlePageChange = (event, value) => {
		event.preventDefault();
		setPage(value);
		setSkip(value - 1);
	};

	if (loading) return <p>Loading ...</p>;

	const advertizements = get(data, 'advertizements.advertizeData');
	const noOfPages = get(data, 'advertizements.meta.noOfPages');

	return (
		<>
			<Grid container className={classes.root}>
				{Array.isArray(advertizements) &&
					advertizements.map((advertize) => (
						<AdvertizeListItem key={advertize._id} advertize={advertize} />
					))}
			</Grid>
			<Pagination
				count={noOfPages}
				classes={{
					ul: classes.ul,
				}}
				className={classes.pagination}
				defaultPage={page}
				onChange={handlePageChange}
				color="secondary"
			/>
		</>
	);
};
export default AdvertizeList;
