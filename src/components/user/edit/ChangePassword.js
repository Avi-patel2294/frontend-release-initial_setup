import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Field } from 'formik';
import TextInput from '../../elements/TextInput';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));
const ChangePassword = () => {
	const classes = useStyles();
	// console.log(userInfo);
	return (
		<Formik
			onSubmit={(data) => {
				// const response = await loginUser({
				//     variables: {
				//         email: data.email,
				//         password: data.password,
				//         type: data.type,
				//     },
				//     refetchQueries: ['getLoggedInUser'],
				// });
				console.log(data);
			}}
			enableReinitialize={true}
			initialValues={{
				oldPassword: '',
				newPassword: '',
				confirmPassword: '',
			}}
		>
			{({ values, handleSubmit }) => (
				<form className={classes.form} onSubmit={handleSubmit}>
					<Field
						margin="normal"
						variant="outlined"
						fullWidth
						required
						id="oldPassword"
						label="Old Password"
						name="oldPassword"
						component={TextInput}
					/>
					<Field
						required
						variant="outlined"
						margin="normal"
						fullWidth
						id="newPassword"
						label="New Password"
						name="newPassword"
						component={TextInput}
					/>
					<Field
						required
						multiline
						variant="outlined"
						margin="normal"
						fullWidth
						id="confirmPassword"
						label="Confirm Password"
						name="confirmPassword"
						component={TextInput}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Change Password
					</Button>
				</form>
			)}
		</Formik>
	);
};

export default ChangePassword;
