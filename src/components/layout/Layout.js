import React, { Component } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import Container from '@material-ui/core/Container';
import Meta from './Meta';
import { NavBar } from './navbar';
import UserContextProvider from '../../context/UserContext';
import LocationContextProvider from '../../context/LocationContext';
import ModalContextProvider from '../../context/ModalContext';
import Footer from './Footer';

if (typeof window !== 'undefined') {
	Router.events.on('routeChangeStart', () => {
		NProgress.start();
	});

	Router.events.on('routeChangeComplete', () => {
		NProgress.done();
	});

	Router.events.on('routeChangeError', () => {
		NProgress.done();
	});
}
class Layout extends Component {
	render() {
		return (
			<UserContextProvider>
				<LocationContextProvider>
					<ModalContextProvider>
						<Meta />
						<NavBar />
						<Container component="main" maxWidth="lg">
							{this.props.children}
						</Container>
						<Footer />
					</ModalContextProvider>
				</LocationContextProvider>
			</UserContextProvider>
		);
	}
}
export default Layout;
