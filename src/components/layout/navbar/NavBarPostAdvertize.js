import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import FeatherIcon from 'feather-icons-react';
import PostAdvertize from '../../advertize/PostAdvertize';
import { ModalContext } from '../../../context/ModalContext';

const useStyles = makeStyles(() => ({
	root: {
		backgroundColor: '#fff',
	},
	paper: {
		padding: 20,
	},
}));
const NavBarPostAdvertize = () => {
	const { isPostAdvertizeOpen, changeModal } = useContext(ModalContext);

	const classes = useStyles();

	const openPostAdvertizeDrawer = (e) => {
		e.preventDefault();
		changeModal('OPEN_POST_ADVERTIZE');
	};
	const closePostAdvertizeDrawer = (e) => {
		e.preventDefault();
		changeModal('CLOSE_POST_ADVERTIZE');
	};

	return (
		<Drawer anchor="right" open={isPostAdvertizeOpen}>
			<Paper square elevation={0} className={classes.paper}>
				<Container maxWidth="sm">
					<IconButton
						aria-label="close"
						style={{
							position: 'absolute',
							top: 0,
							right: 0,
						}}
						color="primary"
						onClick={closePostAdvertizeDrawer}
					>
						<FeatherIcon size={12} icon="x" />
					</IconButton>
					<Typography component="h2" variant="h4" align="center">
						Post Advertize
					</Typography>
					<PostAdvertize />
				</Container>
			</Paper>
		</Drawer>
	);
};

export default NavBarPostAdvertize;
