import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../../../context/UserContext';
import { ModalContext } from '../../../context/ModalContext';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { isEmpty } from 'lodash';
import FeatherIcon from 'feather-icons-react';

const useStyles = makeStyles((theme) => ({
	avatar: {
		backgroundColor: theme.palette.secondary.main,
		width: theme.spacing(6),
		height: theme.spacing(6),
	},
}));
const AuthDrawerCard = () => {
	const classes = useStyles();
	const userInfo = useContext(UserContext);
	const { changeModal } = useContext(ModalContext);

	return (
		<Card style={{ maxWidth: '400px' }} elevation={4} square color="primary">
			{!isEmpty(userInfo) ? (
				<>
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
									{userInfo.name ? userInfo.name.substring(0, 1) : 'A'}
								</Avatar>
							)
						}
						title={userInfo.name}
						color="primary"
						subheader={userInfo.email}
					/>
				</>
			) : (
				<>
					<CardHeader
						avatar={<Avatar aria-label="Sign In">R</Avatar>}
						title="Login In"
						color="primary"
						subheader="You are not Logged in"
					/>
					<CardActionArea>
						<CardContent>
							<ListItem button onClick={() => changeModal('OPEN_LOGIN')}>
								<ListItemIcon>
									<FeatherIcon icon="lock" />
								</ListItemIcon>
								<ListItemText primary="click here to Login" />
							</ListItem>
						</CardContent>
					</CardActionArea>
				</>
			)}
		</Card>
	);
};

export default AuthDrawerCard;
