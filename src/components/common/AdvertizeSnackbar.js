import React from 'react';
import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function TransitionUp(props) {
	return <Slide {...props} direction="up" />;
}

export default function AdvertizeSnackbar({ message, severity }) {
	const [openSnackbar, setOpenSnackbar] = React.useState(true);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpenSnackbar(false);
	};

	return (
		<Snackbar
			open={openSnackbar}
			autoHideDuration={6000}
			onClose={handleClose}
			TransitionComponent={TransitionUp}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
		>
			<MuiAlert
				elevation={10}
				variant="filled"
				onClose={handleClose}
				severity={severity}
			>
				{message}
			</MuiAlert>
		</Snackbar>
	);
}
