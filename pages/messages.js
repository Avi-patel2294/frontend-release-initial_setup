import React from 'react';
import { withApollo } from '../config/apollo';

const Messages = () => {
	return (
		<div>
			<h1> Messages</h1>
		</div>
	);
};

export default withApollo({ ssr: true })(Messages);
