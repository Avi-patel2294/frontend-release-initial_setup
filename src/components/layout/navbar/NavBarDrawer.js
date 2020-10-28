import React, { useContext } from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';

import AuthDrawerCard from './AuthDrawerCard';
import { UserContext } from '../../../context/UserContext';

const NavBarDrawer = () => {
	const userInfo = useContext(UserContext);
	return (
		<>
			<AuthDrawerCard />
			<List>
				<Link href="/">
					<ListItem button>
						<ListItemIcon>
							<FeatherIcon strokeWidth="1.2" icon="home" />
						</ListItemIcon>
						<ListItemText primary="Home" />
					</ListItem>
				</Link>
				{userInfo && userInfo.email ? (
					<React.Fragment>
						<Link href="/profile/my-listings">
							<ListItem button>
								<ListItemIcon>
									<FeatherIcon strokeWidth="1.2" icon="grid" />
								</ListItemIcon>
								<ListItemText primary="My Listings" />
							</ListItem>
						</Link>
						<Link href="/profile/favorites">
							<ListItem button>
								<ListItemIcon>
									<FeatherIcon strokeWidth="1.2" icon="heart" />
								</ListItemIcon>
								<ListItemText primary="Favorites" />
							</ListItem>
						</Link>
						<Link href="/messages">
							<ListItem button>
								<ListItemIcon>
									<FeatherIcon strokeWidth="1.2" icon="message-square" />
								</ListItemIcon>
								<ListItemText primary="Messages" />
							</ListItem>
						</Link>
						<Link href="/profile">
							<ListItem button>
								<ListItemIcon>
									<FeatherIcon strokeWidth="1.2" icon="user" />
								</ListItemIcon>
								<ListItemText primary="Profile" />
							</ListItem>
						</Link>
						{/* <SignOut /> */}
					</React.Fragment>
				) : null}
			</List>
			<Divider />
			<List>
				<Link href="/about">
					<ListItem button>
						<ListItemIcon>
							<FeatherIcon strokeWidth="1.2" icon="info" />
						</ListItemIcon>
						<ListItemText primary="About Advertize Pro" />
					</ListItem>
				</Link>
				<Link href="/privacy-policy">
					<ListItem button>
						<ListItemIcon>
							<FeatherIcon strokeWidth="1.2" icon="shield" />
						</ListItemIcon>
						<ListItemText primary="Privacy Policy" />
					</ListItem>
				</Link>
				<Link href="/terms-of-use">
					<ListItem button>
						<ListItemIcon>
							<FeatherIcon strokeWidth="1.2" icon="align-left" />
						</ListItemIcon>
						<ListItemText primary="Terms & Conditions" />
					</ListItem>
				</Link>
			</List>
		</>
	);
};
export default NavBarDrawer;
