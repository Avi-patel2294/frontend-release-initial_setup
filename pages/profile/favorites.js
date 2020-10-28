import React from 'react';
import { withApollo } from '../../config/apollo';

const Favorites = () => {
	return (
		<div>
			<h1> Favorites</h1>
		</div>
	);
};

export default withApollo({ ssr: true })(Favorites);
