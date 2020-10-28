import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import clsx from 'clsx';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { autoPlay } from 'react-swipeable-views-utils';
import FeatherIcon from 'feather-icons-react';
import IconButton from '@material-ui/core/IconButton';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxHeight: 450,
		maxWidth: 900,
		margin: 'auto',
		position: 'relative',
	},
	IconButton: {
		position: 'absolute',
		height: '100%',
		top: 0,
		borderRadius: 0,
	},
	rightButton: {
		right: 0,
	},
	leftButton: {
		left: 0,
	},
	imgContainer: {
		cursor: 'pointer',
		width: '100%',
		height: 450,
		backgroundPosition: 'center',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
	},
	thumbContainer: {
		listStyle: 'none',
		display: 'flex',
		alignItems: 'center',
		overflowY: 'auto',
	},
	imgThumb: {
		cursor: 'pointer',
		height: 90,
		display: 'inline-block',
		width: 160,
		backgroundPosition: 'center',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		border: `3px solid ${theme.palette.background.default}`,
		marginRight: theme.spacing(2),
	},
	img: {
		width: 'auto',
		maxHeight: 450,
		display: 'block',
		overflow: 'hidden',
		maxWidth: 700,
		margin: 'auto',
	},
}));

// const images = [
// 	{
// 		original: 'https://picsum.photos/id/1018/1000/600/',
// 		thumbnail: 'https://picsum.photos/id/1018/250/150/',
// 	},
// 	{
// 		original: 'https://picsum.photos/id/1015/1000/600/',
// 		thumbnail: 'https://picsum.photos/id/1015/250/150/',
// 	},
// 	{
// 		original: 'https://picsum.photos/id/1019/1000/600/',
// 		thumbnail: 'https://picsum.photos/id/1019/250/150/',
// 	},
// 	{
// 		original:
// 			'https://images.pexels.com/photos/2250276/pexels-photo-2250276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// 		thumbnail:
// 			'https://images.pexels.com/photos/2250276/pexels-photo-2250276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// 	},
// ];

const AdvertizeImageSlider = ({ images, userId }) => {
	const classes = useStyles();
	const theme = useTheme();

	const [activeSlide, setActiveSlide] = useState(0);
	const [maxSlide, setMaxSlide] = useState(images.length);

	const handleNextSlide = () => {
		setActiveSlide(activeSlide + 1);
	};
	const handlePrevSlide = () => {
		setActiveSlide(activeSlide - 1);
	};

	const handleSlideChange = (step) => {
		setActiveSlide(step);
	};

	return (
		<>
			<div className={classes.root}>
				<AutoPlaySwipeableViews
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={activeSlide}
					interval={30000}
					onChangeIndex={handleSlideChange}
					enableMouseEvents
				>
					{images.map((slide, index) => (
						<div
							key={index}
							className={classes.imgContainer}
							itemID={index}
							style={{
								backgroundImage: `url(${
									process.env.IMAGE_SERVER_URL + userId + '/' + slide.largeFile
								})`,
							}}
						></div>
					))}
				</AutoPlaySwipeableViews>
				<IconButton
					color="primary"
					onClick={handleNextSlide}
					disabled={activeSlide === maxSlide - 1}
					className={clsx(classes.IconButton, classes.rightButton)}
				>
					{theme.direction === 'rtl' ? (
						<FeatherIcon icon="arrow-left" />
					) : (
						<FeatherIcon icon="arrow-right" />
					)}
				</IconButton>
				<IconButton
					color="primary"
					onClick={handlePrevSlide}
					disabled={activeSlide === 0}
					className={clsx(classes.IconButton, classes.leftButton)}
				>
					{theme.direction === 'rtl' ? (
						<FeatherIcon icon="arrow-right" />
					) : (
						<FeatherIcon icon="arrow-left" />
					)}
				</IconButton>
			</div>
			<ul className={classes.thumbContainer}>
				{images.map((slide, index) => (
					<li key={index}>
						<div
							className={classes.imgThumb}
							onClick={() => handleSlideChange(index)}
							style={{
								backgroundImage: `url(${
									process.env.IMAGE_SERVER_URL + userId + '/' + slide.thumbFile
								})`,
							}}
						></div>
					</li>
				))}
			</ul>
		</>
	);
};

export default AdvertizeImageSlider;
