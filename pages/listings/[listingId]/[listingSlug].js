import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import LinearProgress from '@material-ui/core/LinearProgress';
import SingleAdvertize from '../../../src/components/advertize/SingleAdvertize';
import { withApollo } from '../../../config/apollo';

import { GET_SINGLE_ADVERIZEMENT } from '../../../graphql/advertize/advertizeQueries';

const AdvertizeDetailsPage = () => {
	const router = useRouter();
	const { listingId, listingSlug } = router.query;

	const { loading, data } = useQuery(GET_SINGLE_ADVERIZEMENT, {
		variables: {
			_id: listingId,
		},
	});
	if (loading) {
		return (
			<div>
				<LinearProgress color="secondary" />;
			</div>
		);
	}
	return (
		!loading && <SingleAdvertize advertizeData={data.getSingleAdvertize} />
	);
};

export default withApollo({ ssr: true })(AdvertizeDetailsPage);
