import React, { useState, useContext } from 'react';
import { Formik, Form } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { LocationContext } from '../../context/LocationContext';
import { ModalContext } from '../../context/ModalContext';
import SelectCategory from '../categories/SelectCategory';
import DropzoneUplaod from '../upload/DropzoneUpload';
import AdvertizeCommon from './post-advertize/AdvertizeCommon';
import AdvertizeVehicle from './post-advertize/AdvertizeVehicle';
import { AdvertizeInitialValues } from './post-advertize/AdvertizeInitialValues';

import { POST_ADVERTIZE_MUTATION } from '../../../graphql/advertize/advertizeMutation';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

const PostAdvertize = () => {
	const classes = useStyles();
	const locationData = useContext(LocationContext);
	const { changeModal } = useContext(ModalContext);

	const [category, setCategory] = useState({
		category: '',
		parentCategory: '',
	});
	const [images, setImages] = useState([]);
	const [postAdvertize, { data }] = useMutation(POST_ADVERTIZE_MUTATION);
	return (
		<>
			<SelectCategory category={category} setCategory={setCategory} />
			<DropzoneUplaod images={images} setImages={setImages} />
			{category.parentCategory !== '' ? (
				<Formik
					initialValues={AdvertizeInitialValues}
					onSubmit={async (submittedData) => {
						submittedData['images'] = images;
						submittedData['category'] = category.category;
						let advertizeData = {
							title: submittedData.title,
							description: submittedData.description,
							price: submittedData.price,
							// isFree: submittedData.isFree,
							location: locationData,
							category: category.category,
							images: images,
						};
						if (category.parentCategory === 'Vehicle') {
							advertizeData['vehicle'] = submittedData.vehicle;
						}
						const response = await postAdvertize({
							variables: {
								advertizeData,
							},
							refetchQueries: ['getAllAdvertizements'],
						});

						if (response && response.data && response.data.postAdvertize) {
							changeModal('CLOSE_POST_ADVERTIZE');
						}
					}}
				>
					{({ values, errors, touched }) => (
						<Form>
							<AdvertizeCommon />
							{category.parentCategory === 'Vehicles' ? (
								<AdvertizeVehicle values={values} />
							) : null}
							<Button
								type="submit"
								variant="contained"
								color="primary"
								className={classes.button}
							>
								Post Ad
							</Button>
						</Form>
					)}
				</Formik>
			) : null}
		</>
	);
};
export default PostAdvertize;
