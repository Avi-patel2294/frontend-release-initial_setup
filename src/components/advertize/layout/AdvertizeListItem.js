import React from 'react';
import Link from 'next/link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { colors } from '../../../../config/constant';
import IconText from '../../ui/IconText';

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: 20,
		padding: 10,
		width: '100%',
		cursor: 'pointer',
	},
	card: {
		display: 'flex',
		marginBottom: 10,
		width: '100%',
	},
	details: {
		padding: 10,
	},
	content: {
		flex: '1 0 auto',
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			justifyContent: 'flex-start',
		},
	},
	subHead: {
		display: 'flex',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	button: {
		margin: theme.spacing(1),
	},
	media: {
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		height: '100%',
		width: '100%',
		border: `1px solid ${theme.palette.secondary.main}`,
	},
}));
const AdvertizeListItem = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));
	const {
		_id,
		images,
		description,
		createdAt,
		title,
		location,
		price,
		user,
		slug,
	} = props.advertize;
	let imagePath;

	if (images.length > 0) {
		imagePath =
			process.env.IMAGE_SERVER_URL + user._id + '/' + images[0].thumbFile;
	} else {
		imagePath = '/images/not-found.jpg';
	}
	const postDate = new Date(parseInt(createdAt));
	// const disc =
	// 	description && description !== ''
	// 		? draftToHtml(JSON.parse(description))
	// 		: null;
	// const textDesc = htmlToText.fromString(disc, { wordwrap: false });

	return (
		<Link href={`/listings/${_id}/${slug}`}>
			<Paper elevation={10} className={classes.root}>
				<Grid container>
					<Grid item xs={4} sm={4} md={2}>
						<CardMedia
							className={classes.media}
							image={imagePath}
							title={title}
						/>
					</Grid>
					<Grid item xs={8} sm={8} md={10} className={classes.details}>
						<div className={classes.title}>
							<div>
								<Typography component="h4" variant="h6" color="primary">
									{title}
								</Typography>
								<div className={classes.subHead}>
									<IconText color="secondary" size={12} icon="map-pin">
										{location.city + ', ' + location.state}
									</IconText>
									<IconText color="secondary" size={12} icon="calendar">
										{postDate.toISOString().split('T')[0]}
									</IconText>
								</div>
							</div>

							<div>
								<Typography component="span" variant="h6" color="secondary">
									$ {price}
								</Typography>
							</div>
						</div>
						<div />
						{matches ? (
							<Typography component={'div'} className="brand-grey">
								{/* {textDesc && textDesc !== '' ? textDesc.substring(0, 200) : null}
							{textDesc && textDesc !== '' && textDesc.length > 200 */}
								{description && description !== ''
									? description.substring(0, 200)
									: null}
								{description && description !== '' && description.length > 200
									? '...'
									: null}
							</Typography>
						) : null}
					</Grid>
				</Grid>
			</Paper>
			{/* {edit && edit === true ? (
            <div>
              <Button component={Link} to={`/listing/${id}`}>
                <Visibility style={{ marginRight: 3 }} />
                View
              </Button>
              <Button component={Link} to={`/update/listing/${id}`}>
                <Create style={{ marginRight: 3 }} />
                Edit
              </Button>
              <Button
                className="app-danger"
                component={Link}
                to={`/delete/advertize/${id}`}
              >
                <Delete style={{ marginRight: 3 }} />
                Delete
              </Button>
            </div>
          ) : null} */}
		</Link>
	);
};
export default AdvertizeListItem;
