import React from 'react';
import { Form, Field } from 'formik';
import TextInput from '../../elements/TextInput';
const AdvertizeTitle = () => {
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
		</>
	);
};

export default AdvertizeTitle;
