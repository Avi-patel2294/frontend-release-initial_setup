import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDropzone } from 'react-dropzone';
import { useMutation } from '@apollo/react-hooks';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import axios from 'axios';

import { UPDATE_PROFILE_IMAGE_MUTATION } from '../../../../graphql/user/UserMutations';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		marginBottom: theme.spacing(2),
		cursor: 'pointer',
	},
	avatar: {
		backgroundColor: theme.palette.secondary.main,
		width: theme.spacing(10),
		height: theme.spacing(10),
	},
}));
const EditProfileImage = ({ userInfo }) => {
	const classes = useStyles();

	const [updateUser, { data }] = useMutation(UPDATE_PROFILE_IMAGE_MUTATION);
	const { getRootProps, getInputProps, open } = useDropzone({
		accept: 'image/*',
		noClick: true,
		multiple: false,
		noKeyboard: true,
		onDrop: (acceptedFiles) => {
			const uploadImages = acceptedFiles.map((file) => {
				const formData = new FormData();
				formData.append('profile_image', file);
				return axios
					.post(process.env.IMAGE_SERVER_URL + 'image/profile', formData, {
						withCredentials: true,
					})
					.then(async (response) => {
						const data = response.data;
						console.log(data);
						const resp = await updateUser({
							variables: {
								image: data.thumbFile,
							},
							refetchQueries: ['getLoggedInUser'],
						});
					});
			});
		},
	});
	const letter =
		userInfo && userInfo.name ? userInfo.name.substring(0, 1) : 'A';

	return (
		<Card {...getRootProps()} elevation={0} className={classes.root}>
			<div onClick={open}>
				<CardHeader
					avatar={
						userInfo && userInfo.image ? (
							<Avatar
								alt="Remy Sharp"
								className={classes.avatar}
								src={`${process.env.IMAGE_SERVER_URL}images/profile/${userInfo.image}`}
							/>
						) : (
							<Avatar
								aria-label="User Name"
								variant="circle"
								className={classes.avatar}
							>
								{letter}
							</Avatar>
						)
					}
					title="Tap the photo to change it"
					subheader="Images must be in PNG or JPG format and under 5mb"
				/>
				<input {...getInputProps()} />
			</div>
		</Card>
	);
};

export default EditProfileImage;
