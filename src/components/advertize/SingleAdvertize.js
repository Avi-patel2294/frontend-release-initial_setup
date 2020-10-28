import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AdvertizeImageSlider from '../common/AdvertizeImageSlider';
import LocationMap from '../common/LocationMap';
import UserInfoCard from '../common/UserInfoCard';
import CategoryBreadcrumb from '../categories/CategoryBreadcrumb';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3),
	},
	button: {
		marginTop: theme.spacing(2),
	},
	secondaryContent: {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.background.paper,
	},
}));

const SingleAdvertize = ({ advertizeData }) => {
	const classes = useStyles();
	const {
		_id,
		title,
		description,
		location,
		user,
		price,
		images,
		category,
	} = advertizeData;
	return (
		<Grid container spacing={4}>
			<Grid item xs={12} md={8} lg={9}>
				<Paper elevation={10} className={classes.root}>
					<CategoryBreadcrumb categoryId={category} listingId={_id} />
					<Typography component="h1" variant="h4" color="secondary">
						{title}
					</Typography>
					<Typography component="h3" variant="h6" color="primary">
						$ {price}
					</Typography>
					<AdvertizeImageSlider userId={user._id} images={images} />
					<Typography component="h5" variant="h6" color="secondary">
						Description:
					</Typography>
					<div>
						{description.split('\n').map((desc, idx) => {
							return (
								<Typography variant="body1" key={idx}>
									{desc}
									<br />
								</Typography>
							);
						})}
					</div>
				</Paper>
			</Grid>

			<Grid item xs={12} md={4} lg={3}>
				<UserInfoCard userInfo={user} advertizeId={_id}>
					<TextField
						fullWidth
						name="message"
						id="message"
						label="Message"
						value="Hi, I'm interested! Please contact me if this is still available."
						variant="outlined"
						multiline
					/>
					<Button variant="outlined" color="primary" className={classes.button}>
						Send Message
					</Button>
				</UserInfoCard>
				<LocationMap locationInfo={location} />
			</Grid>
		</Grid>
	);
};

export default SingleAdvertize;
