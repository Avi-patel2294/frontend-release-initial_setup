import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';
import SelectCategory from '../../categories/SelectCategory';
import { makeStyles } from '@material-ui/core/styles';
import FileUpload from '../../file-upload/FileUpload';
import DropzoneUplaod from '../../upload/DropzoneUpload';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

const AdvertizeCategory = ({
	advertizeData,
	setAdvertizeData,
	nextAdvterizeStep,
}) => {
	const classes = useStyles();
	return (
		<form>
			<SelectCategory
				advertizeData={advertizeData}
				setAdvertizeData={setAdvertizeData}
			/>
			<DropzoneUplaod />
			<Button
				type="submit"
				variant="contained"
				color="primary"
				onClick={nextAdvterizeStep}
				className={classes.button}
				disabled={advertizeData.category === '' ? true : false}
			>
				Continue
			</Button>
		</form>
	);
};
export default AdvertizeCategory;
