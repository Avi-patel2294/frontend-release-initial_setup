import React from 'react';
import MapGL, { SVGOverlay } from 'react-map-gl';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import FeatherIcon from 'feather-icons-react';

const TOKEN = process.env.MAPBOX_API_KEY;

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(3),
	},
	content: {
		paddingTop: '0px !important',
		paddingBotton: '0px !important',
	},
	button: {
		marginTop: theme.spacing(2),
	},
	avatar: {
		padding: theme.spacing(1.1),
		backgroundColor: theme.palette.secondary.main,
	},
}));
const LocationMap = ({ locationInfo }) => {
	const classes = useStyles();
	function redraw({ project }) {
		const [cx, cy] = project([locationInfo.lng, locationInfo.lat]);
		return <circle cx={cx} cy={cy} r={50} fill="rgba(5, 145, 160, .3)" />;
	}
	return (
		<Card elevation={10} className={classes.root}>
			<CardHeader
				avatar={
					<Avatar
						aria-label="User Name"
						variant="circle"
						className={classes.avatar}
					>
						<FeatherIcon icon="map-pin" />
					</Avatar>
				}
				title={`${locationInfo.city}, ${locationInfo.state}`}
				// subheader={userInfo.email}
			/>
			<CardContent className={classes.content}>
				<MapGL
					clickRadius={12}
					latitude={locationInfo.lat}
					longitude={locationInfo.lng}
					width="100%"
					height={200}
					zoom={12}
					// mapboxApiAccessToken={TOKEN}
				>
					<SVGOverlay redraw={redraw} />
				</MapGL>
			</CardContent>
		</Card>
	);
};

export default LocationMap;
