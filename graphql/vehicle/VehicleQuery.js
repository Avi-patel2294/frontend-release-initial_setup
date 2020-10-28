import gql from 'graphql-tag';
export const GET_CARS = gql`
	query getCars {
		getCars {
			_id
			make
			models
		}
	}
`;
