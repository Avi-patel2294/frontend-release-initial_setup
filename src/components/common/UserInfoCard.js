import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FeatherIcon from 'feather-icons-react';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	avatar: {
		backgroundColor: theme.palette.secondary.main,
		width: theme.spacing(6),
		height: theme.spacing(6),
	},
}));

export default function UserInfoCard(props) {
	const classes = useStyles();
	const { userInfo, profile, openEditModal } = props;
	const letter = userInfo.name ? userInfo.name.substring(0, 1) : 'A';
	return (
		<Card elevation={10} className={classes.root}>
			<CardHeader
				avatar={
					userInfo && userInfo.image ? (
						<Avatar
							alt="Remy Sharp"
							className={classes.avatar}
							src={`${process.env.IMAGE_SERVER_URL}images/profile/${userInfo.image}`}
						/>
					) : (
						<Avatar
							aria-label="User Name"
							variant="circle"
							className={classes.avatar}
						>
							{letter}
						</Avatar>
					)
				}
				action={
					profile ? (
						<IconButton aria-label="settings" onClick={openEditModal}>
							<FeatherIcon icon="edit-2" />
						</IconButton>
					) : null
				}
				title={userInfo.name}
				subheader={userInfo.email}
			/>
			<CardContent>{props.children}</CardContent>
		</Card>
	);
}
