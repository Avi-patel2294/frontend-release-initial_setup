import React, { createContext, useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

export const UserContext = createContext({});
import { GET_LOGGED_IN_USER } from '../../graphql/user/query/loggedInUser';

const UserContextProvider = props => {
	const [currentUser, setCurrentUser] = useState({});
	const { error, data } = useQuery(GET_LOGGED_IN_USER);
	useEffect(() => {
		//effect

		if (error) {
			setCurrentUser({});
		}
		if (data) {
			console.log(data);
			setCurrentUser({ ...data.getLoggedInUser });
		}
		return () => {
			//cleanup
			setCurrentUser({});
		};
	}, [data]);
	return (
		<UserContext.Provider value={currentUser}>
			{props.children}
		</UserContext.Provider>
	);
};
export default UserContextProvider;
