import gql from 'graphql-tag';
export const GET_ALL_CATEGORIES = gql`
	query getCategories {
		getCategories {
			_id
			name
			subCategories {
				_id
				name
				subCategories {
					_id
					name
				}
			}
		}
	}
`;

export const GET_PARENT_CATEGORIES = gql`
	query getParentCategories {
		getParentCategories {
			_id
			name
			count
		}
	}
`;

export const GET_SUB_CATEGORIES = gql`
	query getSubCategories($parentId: ID!) {
		getSubCategories(parentId: $parentId) {
			_id
			name
			count
		}
	}
`;

export const GET_CATEGORY_TREE = gql`
	query getCategoryTree($categoryId: ID!) {
		getCategoryTree(categoryId: $categoryId) {
			_id
			name
			parent {
				_id
				name
				parent {
					_id
					name
				}
			}
		}
	}
`;
