import React, { useState, useEffect } from 'react';
import SelectParentCategory from './select/SelectParentCategory';
import SelectSubCategory from './select/SelectSubCategory';
import SelectChildCategory from './select/SelectChildCategory';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Chip from '../elements/Chip';
import Typography from '@material-ui/core/Typography';
const SelectCategory = ({ category, setCategory }) => {
	const [parentCategory, setParentCategory] = useState({
		id: '',
		name: '',
		count: -1,
	});
	const [subCategory, setSubCategory] = useState({
		id: '',
		name: '',
		count: -1,
	});
	const [childCategory, setChildCategory] = useState({
		id: '',
		name: '',
		count: -1,
	});

	useEffect(() => {
		if (
			parentCategory.id !== '' &&
			parentCategory.count > 0 &&
			subCategory.id !== '' &&
			subCategory.count === 0
		) {
			setCategory((prevState) => {
				return {
					...prevState,
					category: subCategory.id,
					parentCategory: parentCategory.name,
				};
			});
		}

		if (
			parentCategory.id !== '' &&
			parentCategory.count > 0 &&
			subCategory.id !== '' &&
			subCategory.count > 0 &&
			childCategory.id !== ''
		) {
			setCategory((prevState) => {
				return {
					...prevState,
					category: childCategory.id,
					parentCategory: parentCategory.name,
				};
			});
		}
	}, [parentCategory, subCategory, childCategory]);

	const handleDeleteParentCategory = () => {
		setParentCategory({
			id: '',
			name: '',
			count: -1,
		});
		setSubCategory({
			id: '',
			name: '',
			count: -1,
		});
		setChildCategory({
			id: '',
			name: '',
			count: -1,
		});
	};

	const handleDeleteSubCategory = () => {
		setSubCategory({
			id: '',
			name: '',
			count: -1,
		});
		setChildCategory({
			id: '',
			name: '',
			count: -1,
		});
	};

	const handleDeleteChildCategory = () => {
		setChildCategory({
			id: '',
			name: '',
			count: -1,
		});
	};

	const resetCategory = (e) => {
		e.preventDefault();
		setCategory((prevState) => {
			return {
				...prevState,
				category: '',
				parentCategory: '',
			};
		});
		setParentCategory({
			id: '',
			name: '',
			count: -1,
		});
		setSubCategory({
			id: '',
			name: '',
			count: -1,
		});
		setChildCategory({
			id: '',
			name: '',
			count: -1,
		});
	};
	return (
		<>
			<div>
				<Typography
					component="span"
					style={{ marginBottom: 10, marginTop: 10 }}
				>
					<strong>Category: </strong>
				</Typography>
				{category.category !== '' ? (
					<>
						<Breadcrumbs separator=">" style={{ display: 'inline-block' }}>
							{parentCategory.id !== '' ? (
								<Typography>{parentCategory.name}</Typography>
							) : null}
							{subCategory.id !== '' ? (
								<Typography>{subCategory.name}</Typography>
							) : null}
							{childCategory.id !== '' ? (
								<Typography>{childCategory.name}</Typography>
							) : null}
						</Breadcrumbs>
						<Link className="marginLeftSmall" onClick={resetCategory}>
							Change Category
						</Link>
					</>
				) : (
					<>
						{parentCategory.id !== '' ? (
							<Chip
								className="full-width"
								label={parentCategory.name}
								onDelete={handleDeleteParentCategory}
							/>
						) : null}
						{subCategory.id !== '' ? (
							<Chip
								className="full-width"
								label={subCategory.name}
								onDelete={handleDeleteSubCategory}
							/>
						) : null}
						{childCategory.id !== '' ? (
							<Chip
								className="full-width"
								label={childCategory.name}
								onDelete={handleDeleteChildCategory}
							/>
						) : null}
					</>
				)}
			</div>
			{parentCategory.id === '' ? (
				<SelectParentCategory setParentCategory={setParentCategory} />
			) : null}
			{parentCategory.id !== '' &&
			subCategory.id === '' &&
			parentCategory.count > 0 ? (
				<SelectSubCategory
					parentId={parentCategory.id}
					setSubCategory={setSubCategory}
				/>
			) : null}
			{parentCategory.id !== '' &&
			subCategory.id !== '' &&
			childCategory.id === '' &&
			subCategory.count > 0 ? (
				<SelectChildCategory
					parentId={subCategory.id}
					setChildCategory={setChildCategory}
				/>
			) : null}
		</>
	);
};
export default SelectCategory;
