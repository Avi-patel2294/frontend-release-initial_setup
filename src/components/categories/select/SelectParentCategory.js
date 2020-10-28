import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useQuery } from '@apollo/react-hooks';
import { GET_PARENT_CATEGORIES } from '../../../../graphql/categories/CategoriesQuery';
import SelectCategoryList from '../SelectCategoryList';
const SelectParentCategory = ({ setParentCategory }) => {
	const { data, loading, error } = useQuery(GET_PARENT_CATEGORIES);
	const handleOnClick = (id, name, count) => {
		setParentCategory({ id, name, count });
	};
	if (loading) {
		return <CircularProgress />;
	}
	if (data && data.getParentCategories) {
		return (
			<SelectCategoryList
				categoryDetails={data.getParentCategories}
				handleOnClick={handleOnClick}
			/>
		);
	}
};
export default SelectParentCategory;
