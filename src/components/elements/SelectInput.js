import React from 'react';
import TextField from '@material-ui/core/TextField';

const SelectInput = ({ field, ...props }) => {
	return (
		<TextField {...field} {...props}>
			{props.children}
		</TextField>
	);
};

export default SelectInput;
