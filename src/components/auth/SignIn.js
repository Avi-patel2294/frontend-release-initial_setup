import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik, Field } from 'formik';
import FeatherIcon from 'feather-icons-react';
import TextInput from '../elements/TextInput';
// import { loginUserValidation } from '@advertize/common';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../../../graphql/user/UserMutations';
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
		height: 50,
		width: 50,
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const SignIn = (props) => {
	const classes = useStyles();

	const [loginUser, { data, error }] = useMutation(LOGIN_USER);
	console.log(error);
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<FeatherIcon icon="lock" />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign In
				</Typography>

				<Formik
					onSubmit={async (data) => {
						const response = await loginUser({
							variables: {
								loginUserInput: {
									email: data.email,
									password: data.password,
									client: data.client,
								},
							},
							refetchQueries: ['getLoggedInUser'],
						});
						console.log(response);
					}}
					initialValues={{
						email: '',
						password: '',
						client: 'email',
					}}
					// validationSchema={loginUserValidation}
					validateOnBlur={false}
					validateOnChange={false}
				>
					{({ errors, handleSubmit }) => (
						<form className={classes.form} onSubmit={handleSubmit}>
							<Field
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								component={TextInput}
								autoComplete="email"
								autoFocus
								error={!!errors.email}
								helperText={errors.email}
							/>
							<Field
								variant="outlined"
								margin="normal"
								required
								fullWidth
								component={TextInput}
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								error={!!errors.password}
								helperText={errors.password}
							/>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Remember me"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								Sign In
							</Button>
							<Grid container>
								<Grid item xs>
									<Link href="#" variant="body2">
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<Link variant="body2" onClick={props.linkCallback}>
										{"Don't have an account? Sign Up"}
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
export default SignIn;
