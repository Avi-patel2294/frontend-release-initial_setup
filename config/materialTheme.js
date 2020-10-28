import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
let theme = createMuiTheme({
	typography: {
		fontFamily: ["'Quicksand'", 'Arial', 'sans-serif', '-apple-system'].join(
			','
		),
		h2: {
			fontWeight: 600,
		},
		h4: {
			fontWeight: 600,
		},
		h5: {
			fontWeight: 600,
		},
		h6: {
			fontWeight: 'bold',
			lineHeight: 1.2,
		},
		body1: {
			lineHeight: 1.3,
		},
	},
	palette: {
		primary: {
			main: '#0591a0',
		},
		secondary: {
			main: '#174450',
		},
		error: {
			light: '#d64531',
			main: '#9d0208',
			dark: '#680000',
		},
		success: {
			light: '#60e354',
			main: '#18b020',
			dark: '#007f00',
		},
		background: {
			default: '#f7f7f7',
		},
	},
	props: {
		MuiTab: {
			disableRipple: true,
		},
	},
	mixins: {
		toolbar: {
			minHeight: 50,
		},
	},
});

theme = {
	...theme,
	shape: {
		borderRadius: 0,
	},
	overrides: {
		MuiLink: {
			root: {
				cursor: 'pointer',
			},
		},
		MuiDrawer: {
			paper: {
				color: theme.palette.secondary.main,
				backgroundColor: theme.palette.common.white,
			},
			paperAnchorRight: {
				maxWidth: 600,
				width: '100%',
			},
		},
		MuiInputLabel: {
			root: {
				color: theme.palette.secondary.main,
			},
		},
		MuiOutlinedInput: {
			root: {
				color: 'rgba(23, 68, 80, 1)',
				'&:hover': {
					borderColor: 'rgba(23, 68, 80, 1)',
				},
			},
			notchedOutline: {
				borderColor: 'rgba(23, 68, 80, 1)',
			},
		},
		MuiAppBar: {
			colorDefault: {
				backgroundColor: theme.palette.common.white,
			},
		},
		MuiButton: {
			outlinedPrimary: {
				padding: theme.spacing(1, 4),
			},
			root: {
				borderRadius: '200rem',
				padding: theme.spacing(1, 4),
			},
			label: {
				textTransform: 'uppercase',
			},
			contained: {
				boxShadow: 'none',
				'&:active': {
					boxShadow: 'none',
				},
			},
		},
		MuiTabs: {
			root: {
				marginLeft: theme.spacing(1),
			},
			indicator: {
				height: 3,
				borderTopLeftRadius: 3,
				borderTopRightRadius: 3,
				backgroundColor: theme.palette.common.white,
			},
		},
		MuiTab: {
			root: {
				textTransform: 'none',
				margin: '0 18px',
				minWidth: 0,
				padding: 0,
				[theme.breakpoints.up('md')]: {
					padding: 0,
					minWidth: 0,
				},
			},
		},
		MuiIconButton: {
			root: {
				padding: theme.spacing(2),
			},
		},
		MuiTooltip: {
			tooltip: {
				borderRadius: 0,
			},
		},
		MuiDivider: {
			root: {
				backgroundColor: '#404854',
			},
		},
		MuiListItemText: {
			primary: {
				fontWeight: theme.typography.fontWeightMedium,
			},
		},
		MuiListItemIcon: {
			root: {
				color: 'inherit',
				marginRight: 0,
				minWidth: 40,
				'& svg': {
					fontSize: 20,
				},
			},
		},
		MuiAvatar: {
			root: {
				width: 32,
				height: 32,
			},
		},
	},
};
export default theme;
