import gql from 'graphql-tag';

export const LOGIN_USER = gql`
	mutation loginUser($email: String!, $password: String!, $type: String!) {
		loginUser(email: $email, password: $password, type: $type) {
			token
		}
	}
`;
