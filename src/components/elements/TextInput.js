import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = ({ field, ...props }) => {
	return <TextField {...field} {...props} />;
};

export default TextInput;
