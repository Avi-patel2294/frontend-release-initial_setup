import React, { createContext, useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

export const PostAdvertizeContext = createContext({});
//import { GET_LOGGED_IN_USER } from '../../graphql/user/query/loggedInUser';

const PostAdvertizeContextProvider = (props) => {
	const [postAdvertizeData, setPostAdvertizeData] = useState({});
	return (
		<PostAdvertizeContext.Provider
			postAdvertizeData={postAdvertizeData}
			setPostAdvertizeData={setPostAdvertizeData}
		>
			{props.children}
		</PostAdvertizeContext.Provider>
	);
};
export default PostAdvertizeContextProvider;
