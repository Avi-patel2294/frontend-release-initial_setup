import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FeatherIcon from 'feather-icons-react';

const useStyles = makeStyles((theme) => ({
	root: {
		height: 380,
		transform: 'translateZ(0px)',
		flexGrow: 1,
	},
	speedDial: {
		position: 'absolute',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
}));

const actions = [
	{ icon: <FeatherIcon icon="copy" />, name: 'Copy' },
	{ icon: <FeatherIcon icon="facebook" />, name: 'Share on Facebook' },
	{ icon: <FeatherIcon icon="mail" />, name: 'Email' },
	{ icon: <FeatherIcon icon="twitter" />, name: 'Share on Twitter' },
];

export default function ShareButton() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [hidden, setHidden] = React.useState(false);

	const handleVisibility = () => {
		setHidden((prevHidden) => !prevHidden);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<SpeedDial
				ariaLabel="SpeedDial openIcon example"
				className={classes.speedDial}
				hidden={hidden}
				icon={<FeatherIcon icon="share-2" />}
				onClose={handleClose}
				onOpen={handleOpen}
				open={open}
			>
				{actions.map((action) => (
					<SpeedDialAction
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
						onClick={handleClose}
					/>
				))}
			</SpeedDial>
		</div>
	);
}
