import React from 'react';
import redirect from '../../utils/redirect';

import { GET_LOGGED_IN_USER } from '../../../graphql/user/query/loggedInUser';

const withAuth = (Component) => {
	function WithAuth(props) {
		return <Component {...props} />;
	}

	WithAuth.getInitialProps = async (ctx) => {
		const response = await ctx.apolloClient.query({
			query: GET_LOGGED_IN_USER,
		});

		if (!response || !response.data || !response.data.getLoggedInUser) {
			redirect(ctx, '/');
			return {
				user: null,
			};
		}
		return {
			user: response.data.getLoggedInUser,
		};
	};
	return WithAuth;
};

export default withAuth;
