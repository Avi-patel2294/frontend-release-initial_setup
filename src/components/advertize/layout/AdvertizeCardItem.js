import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FeatherIcon from 'feather-icons-react';
import IconText from '../../ui/IconText';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		justifyContent: 'space-between',
		display: 'flex',
		flexDirection: 'column',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: 'rgba(5, 145, 160, 0.05)',
		},
	},
	media: {
		height: 0,
		paddingTop: '65%', // 16:9
		backgroundSize: 'contain',
		borderBottom: `1px solid ${theme.palette.secondary.light} `,
		backgroundColor: theme.palette.grey[100],
	},
	CardContent: {
		paddingBottom: '0px !important',
	},
	content: {
		width: '100%',
	},
	title: {
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
		maxWidth: '100%',
		overflow: 'hidden',
		marginBottom: theme.spacing(0.3),
	},
	subHead: {
		fontSize: '.85rem',
	},
	textContent: {
		marginTop: theme.spacing(1),
	},
}));

const AdvertizeCardItem = (props) => {
	const classes = useStyles();
	const [isHovered, setIsHovered] = useState(false);
	const fade = useSpring({
		from: {
			opacity: 0,
			height: '100%',
		},
		opacity: 1,
	});
	const scale = useSpring({
		transform: isHovered ? 'sacle(1.05)' : 'scale(1)',
		height: '100%',
		zIndex: -1,
		// opacity: isHovered ? 1 : 0.7,
	});
	const {
		_id,
		slug,
		images,
		description,
		createdAt,
		title,
		location,
		user,
		price,
	} = props.advertize;

	let imagePath;

	if (images.length > 0) {
		imagePath =
			process.env.IMAGE_SERVER_URL + user._id + '/' + images[0].thumbFile;
	} else {
		imagePath = '/images/not-found.jpg';
	}
	console.log(images);
	console.log(imagePath);
	const postDate = new Date(parseInt(createdAt));
	return (
		// <animated.div
		// 	style={scale}
		// 	onMouseEnter={() => setIsHovered(true)}
		// 	onMouseLeave={() => setIsHovered(false)}
		// >
		<Card elevation={10} className={classes.root}>
			<Link href={`/listings/${_id}/${slug}`}>
				<div>
					<CardMedia
						className={classes.media}
						image={imagePath}
						title={title}
					/>
					<CardContent className={classes.CardContent}>
						<div className={classes.content}>
							<Typography
								gutterBottom
								variant="h6"
								component="h2"
								className={classes.title}
								color="secondary"
							>
								{title}
							</Typography>
							<div>
								<IconText color="primary" size={12} icon="map-pin">
									{location.city + ', ' + location.state}
								</IconText>
								<IconText color="primary" size={12} icon="calendar">
									{postDate.toISOString().split('T')[0]}
								</IconText>
							</div>
						</div>
						<Typography
							variant="body2"
							className={classes.textContent}
							color="textSecondary"
							component="p"
						>
							{description && description !== ''
								? description.substring(0, 90)
								: null}
							{description && description !== '' && description.length > 90
								? '...'
								: null}
						</Typography>
					</CardContent>
				</div>
			</Link>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FeatherIcon icon="heart" />
				</IconButton>
				<IconButton aria-label="share">
					<FeatherIcon icon="share-2" />
				</IconButton>
			</CardActions>
		</Card>
		// </animated.div>
	);
};

export default AdvertizeCardItem;
