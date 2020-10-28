import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FeatherIcon from 'feather-icons-react';
import UserInfoCard from '../common/UserInfoCard';
import Divider from '@material-ui/core/Divider';

import UpdateUserProfile from './edit/UpdateUserProfile';
import UserListings from './UserListings';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3),
	},
}));

const UserProfileLayout = ({ user }) => {
	const [editUser, setEditUser] = useState(false);

	const openEditModal = () => {
		setEditUser(true);
	};
	const closeEditModal = () => {
		setEditUser(false);
	};
	return (
		<Grid container spacing={4}>
			<Grid item xs={12} md={4} lg={3}>
				<UserInfoCard
					userInfo={user}
					profile={true}
					openEditModal={openEditModal}
				>
					<Divider />
					<List>
						<ListItem button selected>
							<ListItemIcon>
								<FeatherIcon icon="grid" />
							</ListItemIcon>
							<ListItemText primary="My Listings" />
						</ListItem>
						<ListItem button>
							<ListItemIcon>
								<FeatherIcon icon="heart" />
							</ListItemIcon>
							<ListItemText primary="Favorites" />
						</ListItem>
						<ListItem button>
							<ListItemIcon>
								<FeatherIcon icon="star" />
							</ListItemIcon>
							<ListItemText primary="Reviews" />
						</ListItem>
					</List>
				</UserInfoCard>
				<UpdateUserProfile
					user={user}
					editUser={editUser}
					closeEditModal={closeEditModal}
				/>
			</Grid>
			<Grid item xs={12} md={8} lg={9}>
				<UserListings />
			</Grid>
		</Grid>
	);
};

export default UserProfileLayout;
