import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FeatherIcon from 'feather-icons-react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
	chip: {
		width: '100%',
		borderRadius: 0,
		padding: '2px 15px',
		border: '1px solid rgba(5, 145, 160, .3)',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
	},
	label: {
		fontSize: '1.2rem',
	},
}));

const Chip = ({ label, onDelete }) => {
	const classes = useStyles();
	return (
		<div className={classes.chip}>
			<Typography component="span" color="secondary" className={classes.label}>
				{label}
			</Typography>
			<IconButton aria-label="close" color="secondary" onClick={onDelete}>
				<FeatherIcon size={12} icon="x" />
			</IconButton>
		</div>
	);
};
export default Chip;
