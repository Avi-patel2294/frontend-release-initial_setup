import React, { createContext, useState, useReducer } from 'react';
import ModalReducer from './ModalReducer';
// Initial state
const initialState = {
	isLoginOpen: false,
	isPostAdvertizeOpen: false,
	isDrawerOpen: false,
};

export const ModalContext = createContext(initialState);

export const ModalContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ModalReducer, initialState);

	function changeModal(action) {
		dispatch({
			type: action,
		});
	}

	return (
		<ModalContext.Provider value={{ ...state, changeModal }}>
			{children}
		</ModalContext.Provider>
	);
};
export default ModalContextProvider;
