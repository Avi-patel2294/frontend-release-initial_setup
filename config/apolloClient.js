import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

export default function createApolloClient(initialState, ctx) {
	// The `ctx` (NextPageContext) will only be present on the server.
	// use it to extract auth headers (ctx.req) or similar.
	return new ApolloClient({
		ssrMode: Boolean(ctx),
		link: new HttpLink({
			uri: process.env.API_URI,
			credentials: 'include', // Additional fetch() options like `credentials` or `headers`
			...(ctx && ctx.req
				? {
						headers: {
							cookie: ctx.req.headers['cookie'],
						},
				  }
				: {}),
			fetch,
		}),
		cache: new InMemoryCache().restore(initialState),
	});
}
