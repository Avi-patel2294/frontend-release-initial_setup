import React from 'react';
import Typography from '@material-ui/core/Typography';
import { colors } from '../../../config/constant';
import FeatherIcon from 'feather-icons-react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		fontSize: 'smaller',
		marginBottom: 5,
	},
	icon: {
		marginRight: theme.spacing(1),
	},
}));
const IconText = (props) => {
	const classes = useStyles();
	return (
		<Typography
			variant={props.variant}
			color={props.color}
			className={classes.root}
		>
			<FeatherIcon
				className={classes.icon}
				icon={props.icon}
				size={props.size}
				color={props.color === 'primary' ? colors.primary : colors.secondary}
			/>
			{props.children}
		</Typography>
	);
};
export default IconText;
