import gql from 'graphql-tag';

export const REGISTER_USER = gql`
	mutation registerUser(
		$firstName: String!
		$lastName: String!
		$email: String!
		$password: String!
		$type: String!
		$profileImage: String!
	) {
		registerUser(
			firstName: $firstName
			lastName: $lastName
			email: $email
			password: $password
			type: $type
			profileImage: $profileImage
		)
	}
`;
