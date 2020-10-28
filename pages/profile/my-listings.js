import React from 'react';
import { withApollo } from '../../config/apollo';
import withAuth from '../../src/components/auth/withAuth';

import UserListings from '../../src/components/user/UserListings';
const MyListings = ({ user }) => {
	return <UserListings user={user} />;
};

export default withApollo({ ssr: true })(withAuth(MyListings));
