import React, { useContext, useEffect } from 'react';
import UserProfileLayout from '../../src/components/user/UserProfileLayout';
import withAuth from '../../src/components/auth/withAuth';
import { withApollo } from '../../config/apollo';
const UserProfile = ({ user }) => {
	return <UserProfileLayout user={user} />;
};

export default withApollo({ ssr: true })(withAuth(UserProfile));
