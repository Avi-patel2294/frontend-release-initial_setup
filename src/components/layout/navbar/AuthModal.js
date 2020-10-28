import React, { useState, useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FeatherIcon from 'feather-icons-react';
import SignIn from '../../auth/SignIn';
import SignUp from '../../auth/SignUp';
import { ModalContext } from '../../../context/ModalContext';

const AuthButton = (props) => {
	const { isLoginOpen, changeModal } = useContext(ModalContext);
	const [isSignUp, setIsSignUp] = useState(false);

	const handleModalClose = () => {
		changeModal('CLOSE_LOGIN');
	};

	const showSignUp = (e) => {
		e.preventDefault();
		console.log('Sign Up click');
		setIsSignUp(true);
	};

	const showSignIn = (e) => {
		e.preventDefault();
		console.log('Sign Up click');
		setIsSignUp(false);
	};

	return (
		<Dialog
			open={isLoginOpen}
			onClose={handleModalClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">
				<IconButton
					aria-label="close"
					style={{
						position: 'absolute',
						top: 0,
						right: 0,
					}}
					color="primary"
					onClick={handleModalClose}
				>
					<FeatherIcon size={12} icon="x" />
				</IconButton>
			</DialogTitle>
			<DialogContent>
				{isSignUp ? (
					<SignUp linkCallback={showSignIn} />
				) : (
					<SignIn linkCallback={showSignUp} />
				)}
			</DialogContent>
		</Dialog>
	);
};
export default AuthButton;
