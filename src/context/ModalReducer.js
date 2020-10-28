export default (state, action) => {
	switch (action.type) {
		case 'CLOSE_POST_ADVERTIZE':
			return {
				...state,
				isPostAdvertizeOpen: false,
			};
		case 'OPEN_POST_ADVERTIZE':
			return {
				...state,
				isPostAdvertizeOpen: true,
			};
		case 'CLOSE_DRAWER':
			return {
				...state,
				isDrawerOpen: false,
			};
		case 'OPEN_DRAWER':
			return {
				...state,
				isDrawerOpen: true,
			};
		case 'CLOSE_LOGIN':
			return {
				...state,
				isLoginOpen: false,
			};
		case 'OPEN_LOGIN':
			return {
				...state,
				isLoginOpen: true,
			};
		default:
			return state;
	}
};
