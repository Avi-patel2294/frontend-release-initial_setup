import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withApollo } from '../config/apollo';
const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3),
	},
	content: {
		marginTop: theme.spacing(1),
	},
}));
const TermOfUse = () => {
	const classes = useStyles();
	return (
		<Paper className={classes.root}>
			<Typography component="h1" align="center" variant="h4">
				AdvertizePro LLC Terms of Use
			</Typography>
			<Typography component="div" variant="body1" className={classes.content}>
				Welcome to the AdvertizePro service! Please read these Terms of use (the
				“Agreement”) carefully. Your use of the Service (as defined below)
				constitutes your consent to this Agreement.
			</Typography>
			<Typography component="div" variant="body1" className={classes.content}>
				This Agreement is between you and AdvertizePro LLC (“Company” or “we” or
				“us”) concerning your use of (including any access to) our
				“AdvertizePro” mobile app and also our AdvertizePro website currently
				located at www.advertizepro.com. This Agreement refers to the App and
				Site (together with any content and services available therein) as the
				“Service.” Please note that this Agreement hereby incorporates by
				reference any additional terms and conditions posted by Company through
				the Service, or otherwise made available to you by Company.
			</Typography>
			<Typography component="div" variant="body1" className={classes.content}>
				<strong>Your Account:</strong> In order to access and use some or a
				portion of the Services, you may be required to register with us and set
				up an account with your email address and a password (your “Account”).
				The email address you provide will be your email address, and you are
				solely responsible for maintaining the confidentiality of your password.
				You are solely responsible for all activities that occur under your
				Account. Therefore, you should protect your password and make your
				password difficult for others to guess. You may connect to the Services
				with a third-party service and you give us permission to access, store,
				and use your information from that service as permitted by that service
				and as may be described in our Privacy Policy. If you believe your
				Account may have been compromised or misused, contact us immediately at
				privacy@advertizepro.com.
			</Typography>
			<Typography component="div" variant="body1" className={classes.content}>
				<strong>Using the Services:</strong> You will post in the appropriate
				category or area and will not do any of the following bad things:
				<ul style={{ margin: '5px 0px' }}>
					<li>Provide false or misleading informations.</li>
					<li>Infringe any third-party right.</li>
					<li>
						Distribute viruses or any other technologies that may harm Company
						or the interests or property of Company’s users.
					</li>
					<li>
						Distribute or contain spam, chain letters, or pyramid schemes.
					</li>
					<li>
						Impose an unreasonable load on our infrastructure or interfere with
						the proper working of the Company.
					</li>
					<li>Copy, modify, or distribute any other person's content.</li>
					<li>
						Collect information about others, including email addresses, without
						their consent.
					</li>
					<li>
						Use any robot, spider, scraper or other automated means to access
						Company and collect content for any purpose without our express
						written permission.
					</li>
					<li>
						Bypass measures used to prevent or restrict access to Company.
					</li>
				</ul>
			</Typography>
			<Typography component="div" variant="body1" className={classes.content}>
				<strong>Jurisdictional Issues:</strong> The Service is controlled or
				operated (or both) from the United States, and is not intended to be
				subject Company to any non-U.S. jurisdiction or law. The Service may not
				be appropriate or available for use in some non-U.S. jurisdictions. Any
				use of the Service is at your own risk, and you must comply with all
				applicable laws, rules and regulations in doing so. We may limit the
				Service’s availability at any time, in whole or in part, to any person,
				geographic area or jurisdiction that we choose.
			</Typography>
			<Typography component="div" variant="body1" className={classes.content}>
				<strong>Disclaimers and Limitations of Liability:</strong> The Services
				are provided “as is” and “as available”. You agree not to hold us
				responsible for things other users post or do. As most of the stuff on
				the Services comes from other users, we do not guarantee the accuracy,
				completeness, efficacy or timeliness of any postings or user
				communications or the quality, safety, or legality of what is offered.
				We also cannot guarantee continuous or secure access to our Services.
				Notification functionality in our Services may not occur in real time.
				Such functionality is subject to delays beyond our control, including
				without limitation, delays or latency due to your physical location or
				your wireless data service provider’s network. Accordingly, to the
				extent legally permitted we expressly disclaim all warranties,
				representations and conditions, express or implied, including those of
				quality, merchantability, merchantable quality, durability, fitness for
				a particular purpose and those arising by statute. We are not liable for
				any loss, whether of money (including profit), goodwill, or reputation,
				or any special, indirect, or consequential damages arising out of your
				use of AdvertizePro LLC, even if you advise us or we could reasonably
				foresee the possibility of any such damage occurring. Some jurisdictions
				do not allow the disclaimer of warranties or exclusion of damages, so
				such disclaimers and exclusions may not apply to you.
			</Typography>
			<Typography component="div" variant="body1" className={classes.content}>
				<strong>Copyright Infringement Claims:</strong> The Digital Millennium
				Copyright Act of 1998 (the “DMCA”) provides recourse for copyright
				owners who believe that material appearing on the Internet infringes
				their rights under U.S. copyright law. If you believe in good faith that
				materials available on the Service infringe your copyright, you (or your
				agent) may send to Company a written notice by e-mail requesting that
				Company remove such material or block access to it. If you believe in
				good faith that someone has wrongly filed a notice of copyright
				infringement against you, the DMCA permits you to send to Company a
				counter-notice. Notices and counter-notices must meet the then-current
				statutory requirements imposed by the DMCA. See
				http://www.copyright.gov/ for details. Notices and counter-notices must
				be sent in writing to our DMCA Agent by e-mail to
				copyright@advertizepro.com.
			</Typography>
			<Typography component="div" variant="body1" className={classes.content}>
				<strong>Personal Information:</strong> By using Services, you agree to
				the collection, transfer, storage and use of your personal information
				by AdvertizePro LLC on servers located in the United States and in the
				Canada as further described in our privacy policy.
			</Typography>
			<Typography component="div" variant="body1" className={classes.content}>
				<strong>Last updated:</strong> January 17, 2019
			</Typography>
		</Paper>
	);
};

export default withApollo({ ssr: true })(TermOfUse);
