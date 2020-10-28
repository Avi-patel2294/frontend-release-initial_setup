import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import MuiTabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	appNav: {
		borderRadius: 0,
	},
}));

export const TabPanel = (props) => {
	const { children, currentTab, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={currentTab !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{currentTab === index && children}
		</Typography>
	);
};

function a11yProps(index) {
	return {
		id: `advertize-tab-${index}`,
		'aria-controls': `advertize-tabpanel-${index}`,
	};
}

export const Tabs = ({ tabs, defaultTab, render }) => {
	const classes = useStyles();
	const [currentTab, setCurrentTab] = useState(defaultTab | 0);
	const handleChange = (event, newTab) => {
		setCurrentTab(newTab);
	};
	return (
		<>
			<AppBar color="secondary" className={classes.appNav} position="static">
				<MuiTabs
					value={currentTab}
					onChange={handleChange}
					aria-label="simple tabs example"
				>
					{tabs.map((tab, idx) => {
						return <Tab key={idx} label={tab} {...a11yProps(idx)} />;
					})}
				</MuiTabs>
			</AppBar>
			{render({ currentTab })}
		</>
	);
};
