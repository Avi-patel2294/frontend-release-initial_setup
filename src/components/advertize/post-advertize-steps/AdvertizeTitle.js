import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import TextInput from '../../elements/TextInput';
import FileUpload from '../../file-upload/FileUpload';
import { POST_ADVERTIZE_MUTATION } from '../../../../graphql/advertize/advertizeMutation';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

const AdvertizeTitle = ({
	advertizeData,
	setAdvertizeData,
	nextAdvterizeStep,
}) => {
	const classes = useStyles();
	const [postAdvertize, { data }] = useMutation(POST_ADVERTIZE_MUTATION);
	return (
		<Formik
			initialValues={advertizeData}
			onSubmit={async (submittedData) => {
				const response = await postAdvertize({
					variables: {
						advertizeData: submittedData,
					},
				});
			}}
		>
			{({ errors, touched }) => (
				<Form>
					{/* <SelectCategory /> */}
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
					<Field
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="price"
						label="Price"
						name="price"
						component={TextInput}
					/>
					<Field
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						component={TextInput}
					/>
					<FileUpload />
					<Button
						type="submit"
						variant="contained"
						color="primary"
						className={classes.button}
					>
						Continue
					</Button>
				</Form>
			)}
		</Formik>
	);
};
export default AdvertizeTitle;
