import gql from 'graphql-tag';

export const UPDATE_PROFILE_IMAGE_MUTATION = gql`
	mutation updateUser($image: String) {
		updateUser(image: $image) {
			image
		}
	}
`;

export const UPDATE_PROFILE_DETAILS_MUTATION = gql`
	mutation updateUser($name: String, $email: String, $bio: String) {
		updateUser(name: $name, email: $email, bio: $bio) {
			name
			email
			bio
		}
	}
`;

export const LOGIN_USER = gql`
	mutation loginUser($loginUserInput: loginUserInput!) {
		loginUser(input: $loginUserInput)
	}
`;

export const REGISTER_USER = gql`
	mutation registerUser($registerUserInput: registerUserInput!) {
		registerUser(input: $registerUserInput)
	}
`;
