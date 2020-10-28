import gql from 'graphql-tag';

export const GET_ALL_ADVERIZEMENTS = gql`
	query getAllAdvertizements {
		getAllAdvertizements {
			_id
			slug
			title
			description
			location {
				city
				state
			}
			user {
				_id
			}
			images {
				_id
				thumbFile
			}
			createdAt
			price
		}
	}
`;

export const GET_ADVERIZEMENTS = gql`
	query advertizements($first: Int, $skip: Int) {
		advertizements(first: $first, skip: $skip) {
			advertizeData {
				_id
				slug
				title
				description
				location {
					city
					state
				}
				user {
					_id
				}
				images {
					_id
					thumbFile
				}
				createdAt
				price
			}
			meta {
				noOfPages
			}
		}
	}
`;

export const GET_ADVERIZEMENTS_BY_CATEGORY = gql`
	query getAdvertizementsByCategory($categoryId: ID!) {
		getAdvertizementsByCategory(categoryId: $categoryId) {
			_id
			slug
			title
			description
			location {
				city
				state
			}
			user {
				_id
			}
			images {
				_id
				thumbFile
			}
			createdAt
			price
		}
	}
`;

export const GET_CURRENT_USER_ADVERIZEMENTS = gql`
	query getCurrentUserAdvertizements {
		getCurrentUserAdvertizements {
			_id
			slug
			title
			description
			location {
				city
				state
			}
			user {
				_id
			}
			images {
				_id
				thumbFile
			}
			createdAt
			price
		}
	}
`;

export const GET_SINGLE_ADVERIZEMENT = gql`
	query getSingleAdvertize($_id: ID!) {
		getSingleAdvertize(_id: $_id) {
			_id
			title
			slug
			description
			location {
				city
				state
				lat
				lng
			}
			category
			images {
				_id
				largeFile
				thumbFile
			}
			vehicle {
				make
				year
			}
			user {
				_id
				name
				email
				image
			}
			createdAt
			price
		}
	}
`;
