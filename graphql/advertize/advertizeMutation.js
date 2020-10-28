import gql from 'graphql-tag';

export const POST_ADVERTIZE_MUTATION = gql`
	mutation postAdvertize($advertizeData: AdvertizeInput) {
		postAdvertize(advertizeData: $advertizeData)
	}
`;
