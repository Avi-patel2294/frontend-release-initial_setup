import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import FeatherIcon from 'feather-icons-react';
import { Tabs, TabPanel } from '../../elements/Tabs';
import EditUserProfileForm from './EditUserProfileForm';
import EditProfileImage from './EditProfileImage';
import ChangePassword from './ChangePassword';

const UpdateUserProfile = ({ user, editUser, closeEditModal }) => {
	return (
		<Dialog
			open={editUser}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			maxWidth="xs"
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
					onClick={closeEditModal}
				>
					<FeatherIcon size={12} icon="x" />
				</IconButton>
			</DialogTitle>
			<DialogContent>
				<EditProfileImage userInfo={user} />
				<Tabs
					tabs={['Edit Profile Details', 'Change Password']}
					render={({ currentTab }) => (
						<>
							<TabPanel currentTab={currentTab} index={0}>
								<EditUserProfileForm userInfo={user} />
							</TabPanel>
							<TabPanel currentTab={currentTab} index={1}>
								<ChangePassword />
							</TabPanel>
						</>
					)}
				/>
			</DialogContent>
		</Dialog>
	);
};

export default UpdateUserProfile;
