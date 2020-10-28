import gql from 'graphql-tag';

export const GET_LOGGED_IN_USER = gql`
	query getLoggedInUser {
		getLoggedInUser {
			_id
			name
			email
			bio
			image
			joinDate
		}
	}
`;
