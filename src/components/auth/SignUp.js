import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import FeatherIcon from 'feather-icons-react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useMutation } from '@apollo/react-hooks';
import { Formik, Field } from 'formik';
import TextInput from '../elements/TextInput';
import { REGISTER_USER } from '../../../graphql/user/UserMutations';
// import { registerUserValidation } from '@advertize/common';
import Alert from '@material-ui/lab/Alert';
const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		width: 52,
		height: 52,
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const SignUp = (props) => {
	const classes = useStyles();
	const [registerUser, { data, error }] = useMutation(REGISTER_USER);
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<FeatherIcon icon="lock" />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				{error ? (
					<Alert severity="error">
						{error.message.replace('GraphQL error: ', '')}
					</Alert>
				) : null}
				<Formik
					onSubmit={async (data) => {
						console.log(data);
						const response = await registerUser({
							variables: {
								registerUserInput: {
									firstName: data.firstName,
									lastName: data.lastName,
									email: data.email,
									password: data.password,
									client: data.client,
								},
							},
							refetchQueries: ['getLoggedInUser'],
						}).catch((err) => {});
						console.log(response);
						// const response = await registerUser({
						//   variables: {
						//     firstName: data.firstName,
						//     lastName: data.lastName,
						//     email: data.email,
						//     password: data.password,
						//     type: data.type,
						//     profileImage: data.profileImage
						//   }
						// });
						// console.log(response);
					}}
					initialValues={{
						firstName: '',
						lastName: '',
						email: '',
						password: '',
						client: 'email',
					}}
					// validationSchema={registerUserValidation}
					validateOnChange={false}
					validateOnBlur={false}
				>
					{({ errors, handleSubmit }) => (
						<form className={classes.form} onSubmit={handleSubmit}>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<Field
										label="First Name"
										autoComplete="fname"
										name="firstName"
										variant="outlined"
										component={TextInput}
										required
										fullWidth
										autoFocus
										error={!!errors.firstName}
										helperText={errors.firstName}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<Field
										variant="outlined"
										required
										fullWidth
										id="lastName"
										label="Last Name"
										name="lastName"
										component={TextInput}
										autoComplete="lastName"
										error={!!errors.lastName}
										helperText={errors.lastName}
									/>
								</Grid>
								<Grid item xs={12}>
									<Field
										variant="outlined"
										required
										fullWidth
										id="email"
										label="Email Address"
										name="email"
										component={TextInput}
										autoComplete="email"
										error={!!errors.email}
										helperText={errors.email}
									/>
								</Grid>
								<Grid item xs={12}>
									<Field
										variant="outlined"
										required
										fullWidth
										name="password"
										label="Password"
										type="password"
										id="password"
										component={TextInput}
										autoComplete="current-password"
										error={!!errors.password}
										helperText={errors.password}
									/>
								</Grid>
							</Grid>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								Sign Up
							</Button>
							<Grid container justify="flex-end">
								<Grid item>
									<Link variant="body2" onClick={props.linkCallback}>
										Already have an account? Sign in
									</Link>
								</Grid>
							</Grid>
						</form>
					)}
				</Formik>
			</div>
		</Container>
	);
};

export default SignUp;
