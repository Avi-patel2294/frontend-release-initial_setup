import React, { useMemo, useEffect, useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';

import { colors } from '../../../config/constant';

const useStyles = makeStyles((theme) => ({
	root: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '20px',
		borderWidth: 2,
		borderRadius: 0,
		borderColor: '#eeeeee',
		borderStyle: 'dashed',
		backgroundColor: '#fafafa',
		color: '#bdbdbd',
		outline: 'none',
		transition: 'border .24s ease-in-out',
	},
	container: {
		marginTop: theme.spacing(2),
	},
	active: {
		borderColor: colors.primary,
	},
	accept: {
		borderColor: colors.primary,
	},
	reject: {
		borderColor: '#ff1744',
	},
	thumbsContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: theme.spacing(2),
	},
	thumb: {
		display: 'inline-flex',
		borderRadius: 0,
		border: '1px solid #eaeaea',
		marginBottom: theme.spacing(2),
		marginRight: theme.spacing(2),
		width: 'auto',
		height: 200,
		padding: theme.spacing(1),
		boxSizing: 'border-box',
	},
	thumbInner: {
		display: 'flex',
		minWidth: 0,
		overflow: 'hidden',
	},
	img: {
		display: 'block',
		width: 'auto',
		height: '100%',
	},
}));

const DropzoneUplaod = ({ images, setImages }) => {
	const classes = useStyles();
	const [files, setFiles] = useState([]);
	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject,
		acceptedFiles,
		open,
	} = useDropzone({
		accept: 'image/*',
		noClick: true,
		noKeyboard: true,
		onDrop: (acceptedFiles) => {
			const uploadImages = acceptedFiles.map((file) => {
				const formData = new FormData();
				formData.append('image_file', file);
				return axios
					.post(process.env.IMAGE_SERVER_URL + 'image/upload', formData, {
						withCredentials: true,
					})
					.then((response) => {
						const data = response.data;
						console.log(data);
						setImages((prev) => {
							return [
								...prev,
								{
									fileName: data.fileName,
									largeFile: data.largeFile,
									thumbFile: data.thumbFile,
								},
							];
						});
					});
			});
			axios.all(uploadImages).then(() => {
				setFiles((prev) => {
					return [
						...prev,
						...acceptedFiles.map((file) =>
							Object.assign(file, {
								preview: URL.createObjectURL(file),
							})
						),
					];
				});
			});
		},
	});

	const style = useMemo(
		() =>
			clsx(
				classes.root,
				isDragActive && classes.active,
				isDragAccept && classes.accept,
				isDragReject && classes.reject
			),
		[isDragActive, isDragReject]
	);

	const thumbs = files.map((file) => (
		<div className={classes.thumb} key={file.name}>
			<div className={classes.thumbInner}>
				<img src={file.preview} className={classes.img} />
			</div>
		</div>
	));

	useEffect(
		() => () => {
			// Make sure to revoke the data uris to avoid memory leaks
			files.forEach((file) => URL.revokeObjectURL(file.preview));
		},
		[files]
	);

	return (
		<div className={classes.container}>
			<div {...getRootProps({ className: style })}>
				<input {...getInputProps()} />
				<p>Drag 'n' drop some files here</p>
				<Button variant="outlined" color="primary" onClick={open}>
					Open File Dialog
				</Button>
			</div>
			<aside className={classes.thumbsContainer}>{thumbs}</aside>
		</div>
	);
};

export default DropzoneUplaod;
