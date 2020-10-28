import React, { useState, useContext } from 'react';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import FeatherIcon from 'feather-icons-react';
import { ModalContext } from '../../../context/ModalContext';

import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import NavBarDrawer from './NavBarDrawer';
import NavBarButtons from './NavBarButtons';
import NavbarSearch from '../../advertize/search/NavbarSearch';
import NavBarPostAdvertize from './NavBarPostAdvertize';
import AuthModal from './AuthModal';

const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		backgroundColor: '#fff',
		marginBottom: 20,
	},
	card: {
		maxWidth: 400,
	},
	grow: {
		flexGrow: 1,
	},
}));

const NavBar = () => {
	const { isDrawerOpen, changeModal } = useContext(ModalContext);
	const classes = useStyles();

	const closeDrawer = (e) => {
		e.preventDefault();
		changeModal('CLOSE_DRAWER');
	};
	const openDrawer = (e) => {
		e.preventDefault();
		changeModal('OPEN_DRAWER');
	};
	return (
		<>
			<AppBar position="static" color="default" className={classes.root}>
				<Toolbar>
					<IconButton
						//   className={classes.menuButton}
						color="inherit"
						aria-label="Open drawer"
						onClick={openDrawer}
					>
						<FeatherIcon icon="menu" />
					</IconButton>
					<Link href="/">
						<img
							src="/images/advertize-logo.svg"
							className="brand-logo"
							alt="Advertize Pro Logo"
						/>
					</Link>
					<NavbarSearch />
					<NavBarButtons />
				</Toolbar>

				<SwipeableDrawer
					anchor="left"
					open={isDrawerOpen}
					onClose={closeDrawer}
					onOpen={openDrawer}
				>
					<div
						tabIndex={0}
						role="button"
						onClick={closeDrawer}
						onKeyDown={closeDrawer}
					>
						<NavBarDrawer />
					</div>
				</SwipeableDrawer>

				<NavBarPostAdvertize />
				<AuthModal />
			</AppBar>
		</>
	);
};
export default NavBar;
