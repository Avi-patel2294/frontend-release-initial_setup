import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useQuery } from '@apollo/react-hooks';
import { GET_SUB_CATEGORIES } from '../../../../graphql/categories/CategoriesQuery';
import SelectCategoryList from '../SelectCategoryList';

const SelectChildCategory = ({ parentId, setChildCategory }) => {
	const { data, loading, error } = useQuery(GET_SUB_CATEGORIES, {
		variables: { parentId }
	});
	const handleOnClick = (id, name, count) => {
		setChildCategory({ id, name, count });
	};
	if (loading) {
		return <CircularProgress />;
	}
	if (data && data.getSubCategories) {
		return (
			<SelectCategoryList
				categoryDetails={data.getSubCategories}
				handleOnClick={handleOnClick}
			/>
		);
	} else {
		return <CircularProgress />;
	}
};

export default SelectChildCategory;
