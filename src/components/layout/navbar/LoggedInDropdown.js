import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { ClickAwayListener } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Avatar from '@material-ui/core/Avatar';
import Link from 'next/link';
import { UserContext } from '../../../context/UserContext';

const LoggedInDropdown = () => {
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		setOpen(false);
	};

	const handleListKeyDown = (event) => {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
	};

	return (
		<UserContext.Consumer>
			{(value) => (
				<>
					<IconButton
						ref={anchorRef}
						color="primary"
						aria-controls={open ? 'menu-list-grow' : undefined}
						aria-haspopup="true"
						onClick={handleToggle}
					>
						{value && value.image ? (
							<Avatar
								alt="Remy Sharp"
								// className={classes.avatar}
								src={`${process.env.IMAGE_SERVER_URL}images/profile/${value.image}`}
							/>
						) : (
							<Avatar
								aria-label="User Name"
								variant="circle"
								// className={classes.avatar}
							>
								{value.name ? value.name.substring(0, 1) : 'A'}
							</Avatar>
						)}
					</IconButton>
					<Popper
						open={open}
						anchorEl={anchorRef.current}
						role={undefined}
						transition
						disablePortal
					>
						{({ TransitionProps, placement }) => (
							<Grow
								{...TransitionProps}
								style={{
									transformOrigin:
										placement === 'bottom' ? 'center top' : 'center bottom',
								}}
							>
								<Paper elevation={10}>
									<ClickAwayListener onClickAway={handleClose}>
										<MenuList
											autoFocusItem={open}
											id="menu-list-grow"
											onKeyDown={handleListKeyDown}
										>
											<Link href="/profile">
												<MenuItem onClick={handleClose}>Profile</MenuItem>
											</Link>
											<Link href="/profile/my-listings">
												<MenuItem onClick={handleClose}>My Listings</MenuItem>
											</Link>
											<MenuItem onClick={handleClose}>Logout</MenuItem>
										</MenuList>
									</ClickAwayListener>
								</Paper>
							</Grow>
						)}
					</Popper>
				</>
			)}
		</UserContext.Consumer>
	);
};

export default LoggedInDropdown;
