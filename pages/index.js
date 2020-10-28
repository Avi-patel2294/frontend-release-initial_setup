import React from 'react';
import { withApollo } from '../config/apollo';
import AdvertizeCardsContainer from '../src/components/advertize/layout/AdvertizeCardsContainer';
import AdvertizeList from '../src/components/advertize/layout/AdvertizeList';

function Index() {
	return (
		<>
			<AdvertizeList />
			<AdvertizeCardsContainer />
		</>
	);
}

export default withApollo({ ssr: true })(Index);
