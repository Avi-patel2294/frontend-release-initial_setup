import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Field } from 'formik';
import TextInput from '../../elements/TextInput';
import { useMutation } from '@apollo/react-hooks';

import { makeStyles } from '@material-ui/core/styles';

import { UPDATE_PROFILE_DETAILS_MUTATION } from '../../../../graphql/user/UserMutations';

const useStyles = makeStyles((theme) => ({
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));
const EditUserProfileForm = ({ userInfo }) => {
	const classes = useStyles();
	const [updateUser, { data }] = useMutation(UPDATE_PROFILE_DETAILS_MUTATION);

	return (
		userInfo && (
			<Formik
				onSubmit={async (data) => {
					const response = await updateUser({
						variables: {
							...data,
						},
						refetchQueries: ['getLoggedInUser'],
					});
					console.log(data);
				}}
				enableReinitialize={true}
				initialValues={userInfo}
			>
				{({ handleSubmit }) => (
					<form className={classes.form} onSubmit={handleSubmit}>
						<Field
							margin="normal"
							variant="outlined"
							fullWidth
							id="name"
							label="Name"
							name="name"
							component={TextInput}
						/>
						<Field
							margin="normal"
							variant="outlined"
							fullWidth
							id="email"
							label="Email"
							name="email"
							component={TextInput}
						/>
						<Field
							multiline
							variant="outlined"
							margin="normal"
							fullWidth
							id="bio"
							label="Bio"
							name="bio"
							component={TextInput}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Edit Profile
						</Button>
					</form>
				)}
			</Formik>
		)
	);
};

export default EditUserProfileForm;
