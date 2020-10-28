import React, { useState, useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import { ModalContext } from '../../../context/ModalContext';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import FeatherIcon from 'feather-icons-react';
import LoggedInDropdown from './LoggedInDropdown';

const NavBarButtons = () => {
	const userInfo = useContext(UserContext);
	const { changeModal } = useContext(ModalContext);

	return (
		<>
			<Hidden only="xs">
				<Button
					className="marginLeftSmall "
					color="secondary"
					variant="contained"
					onClick={() => {
						if (userInfo.email) {
							changeModal('OPEN_POST_ADVERTIZE');
						} else {
							changeModal('OPEN_LOGIN');
						}
					}}
				>
					<FeatherIcon size={12} icon="grid" />
					<span className="marginLeftSmall">Post Ads</span>
				</Button>
			</Hidden>
			{userInfo.email ? (
				<LoggedInDropdown />
			) : (
				<Button
					className="marginLeftSmall "
					color="primary"
					variant="outlined"
					onClick={() => changeModal('OPEN_LOGIN')}
				>
					<FeatherIcon size={12} icon="lock" />
					<span className="marginLeftSmall">Login</span>
				</Button>
			)}
		</>
	);
};

export default NavBarButtons;
