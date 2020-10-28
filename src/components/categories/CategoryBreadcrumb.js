import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import CircularProgress from '@material-ui/core/CircularProgress';
import Link from 'next/link';
import MuiLink from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { GET_CATEGORY_TREE } from '../../../graphql/categories/CategoriesQuery';
import { get } from 'lodash';
import slugify from '../../utils/slugify';

const Breadcrumb = ({ categoryId, listingId }) => {
	const { data, loading, error } = useQuery(GET_CATEGORY_TREE, {
		variables: {
			categoryId,
		},
	});
	if (loading) {
		return <CircularProgress />;
	}
	if (error) {
		return <Typography>UnCategorized</Typography>;
	}

	if (data) {
		const parent2 = get(data, 'getCategoryTree.parent.parent');
		const parent = get(data, 'getCategoryTree.parent');
		const category = get(data, 'getCategoryTree');

		return (
			<Breadcrumbs separator=">">
				{parent2 && parent2._id !== '' ? (
					<Link href={`/categories/${parent2._id}/${slugify(parent2.name)}`}>
						<Typography component={MuiLink}>{parent2.name}</Typography>
					</Link>
				) : null}
				{parent && parent._id !== '' ? (
					<Link href={`/categories/${parent._id}/${slugify(parent.name)}`}>
						<Typography component={MuiLink}>{parent.name}</Typography>
					</Link>
				) : null}
				{category && category._id !== '' ? (
					<Link href={`/categories/${category._id}/${slugify(category.name)}`}>
						<Typography component={MuiLink}>{category.name}</Typography>
					</Link>
				) : null}
				<Typography>{listingId}</Typography>
			</Breadcrumbs>
		);
	}
};

export default Breadcrumb;
