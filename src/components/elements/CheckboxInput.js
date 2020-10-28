import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Checkbox from '@material-ui/core/Checkbox';
import { FieldProps } from 'formik';

import MuiCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel, {
	FormControlLabelProps as MuiFormControlLabelProps,
} from '@material-ui/core/FormControlLabel';

const CheckboxInput = ({ label, field, ...props }) => {
	return (
		<FormControlLabel
			control={<MuiCheckbox {...field} {...props} />}
			label={label}
		/>
	);
};

export default CheckboxInput;
