import React from 'react';
import { Field } from 'formik';
import TextInput from '../../elements/TextInput';
import CheckboxInput from '../../elements/CheckboxInput';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	priceContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
}));

const AdvertizeCommon = () => {
	const classes = useStyles();
	return (
		<>
			<Field
				variant="outlined"
				margin="normal"
				required
				fullWidth
				id="title"
				label="Title"
				name="title"
				component={TextInput}
				autoFocus
			/>
			<Field
				variant="outlined"
				margin="normal"
				required
				fullWidth
				id="description"
				label="Description"
				name="description"
				multiline
				component={TextInput}
			/>
			<div className={classes.priceContainer}>
				<Field
					variant="outlined"
					margin="normal"
					required
					id="price"
					label="Price"
					name="price"
					component={TextInput}
				/>
				<Field
					label="secondary"
					margin="normal"
					id="isFree"
					label="Is Free"
					name="isFree"
					component={CheckboxInput}
				/>
			</div>
		</>
	);
};
export default AdvertizeCommon;
