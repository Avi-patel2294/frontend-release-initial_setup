import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { withApollo } from '../config/apollo';
const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3),
	},
	vH5: {
		marginTop: theme.spacing(2),
	},
}));
const PrivacyPolicy = () => {
	const classes = useStyles();
	return (
		<Paper className={classes.root}>
			<Typography component="h1" align="center" variant="h4">
				Advertize Pro LLC Privacy Policy
			</Typography>
			<Typography component="h2" variant="h5" className={classes.vH5}>
				General
			</Typography>
			<Typography component="div" variant="body1">
				This privacy policy describes the policy of AvertizePro LLC regarding
				the collection, use, storage, sharing and protection of your personal
				information. This Privacy Policy applies to the www.advertizepro.com
				website and all related applications, services and tools where reference
				is made to this policy regardless of how you access the Services,
				including access through mobile devices.
			</Typography>
			<Typography component="div" variant="body1">
				By using AdvertizePro LLC and related Services, you give explicit
				consent to AdvertizePro LLC for the collection, use, disclosure and
				retention of your personal information by us, as described in this
				Privacy Policy and our Terms of Use. AdvertizePro LLC may change this
				Privacy Policy from time to time. We advise you to read it regularly.
				Substantial changes to our Privacy Policy will be announced on our
				Website. The amended Privacy Policy will be effective immediately after
				it is first posted on our Website. This Privacy Policy is effective as
				of January 17, 2019.
			</Typography>
			<Typography component="h2" variant="h5" className={classes.vH5}>
				What personal information do we collect
			</Typography>
			<Typography component="div" variant="body1">
				You can visit our Website or App without registering for an account. If
				you refuse to provide your personal information when required, we may
				not be able to provide certain Services. When you decide to provide us
				with your personal information, you agree that such information is sent
				to and stored on our servers. We collect the following types of personal
				information:
			</Typography>
			<Typography
				component="div"
				variant="body1"
				style={{ fontWeight: 'bold' }}
			>
				Information we collect automatically:
			</Typography>
			<Typography component="div" variant="body1">
				When you visit our Website, use our App and or reply to ads or other
				content, we automatically collect the information sent to us by your
				computer, mobile device or other equipment that provides access. This
				information includes, but is not limited to:
			</Typography>
			<ul>
				<li>
					<Typography component="div" variant="body1">
						information from your interaction with our Website and Services,
						including, but not limited to, device ID, device type, geolocation
						information, computer and connection information, statistics on page
						views, traffic to and from www.advertizepro.com, referring URL,
						advertise data, IP address and standard web log information
					</Typography>
				</li>
				<li>
					<Typography component="div" variant="body1">
						information we collect through cookies, localstorage and similar
						technologies.
					</Typography>
				</li>
			</ul>
			<Typography
				component="div"
				variant="body1"
				style={{ fontWeight: 'bold' }}
			>
				Information you provide to us:
			</Typography>
			<Typography component="div" variant="body1">
				We collect and store any information you enter on our Website or that
				you provide to us when you use our Mobile App. This information
				includes, but is not limited to:
			</Typography>
			<ul>
				<li>
					<Typography component="div" variant="body1">
						information that you provide to us when you register for an account.
					</Typography>
				</li>
				<li>
					<Typography component="div" variant="body1">
						additional information that you may provide to us through social
						media sites or third party Services.
					</Typography>
				</li>
				<li>
					<Typography component="div" variant="body1">
						information provided in the context of dispute resolution,
						correspondence through our Website or correspondence that is sent to
						us.
					</Typography>
				</li>
				<li>
					<Typography component="div" variant="body1">
						information about your location and the location of your device
					</Typography>
				</li>
			</ul>
			<Typography component="h2" variant="h5" className={classes.vH5}>
				How we use your personal information
			</Typography>
			<Typography component="div" variant="body1">
				to provide you access to our Services and Customer Support by means of
				e-mail or telephone.
			</Typography>
			<ul>
				<li>
					<Typography component="div" variant="body1">
						to contact you, by e-mail, push notification or by telephone, to
						inquire about our Services for the purpose of targeted marketing
						activities, updates, and promotional offers based on your message
						preferences (where applicable), or for any other purposes as set
						forth in this Privacy Policy.
					</Typography>
				</li>
				<li>
					<Typography component="div" variant="body1">
						to prevent, detect and investigate potentially prohibited or illegal
						activities, fraud and security breaches and to enforce our Terms of
						Use.
					</Typography>
				</li>
				<li>
					<Typography component="div" variant="body1">
						to personalize, measure and improve our Services, content and
						advertisements.
					</Typography>
				</li>
				<li>
					<Typography component="div" variant="body1">
						information about your location and the location of your device
					</Typography>
				</li>
			</ul>
			<Typography component="h2" variant="h5" className={classes.vH5}>
				Memberships and Registration
			</Typography>
			<Typography component="div" variant="body1">
				To use certain Services you will need to register, either by providing
				us your e-mail address. We may also collect information including name
				and email. We may require you to provide us information such as a
				profile picture, name and email address for purposes of making available
				that information on the App and on the Website. You may visit some areas
				of the Services as a guest, but you may not be able to access all the
				content and features of those areas without registering.
			</Typography>
			<Typography component="h2" variant="h5" className={classes.vH5}>
				Advertising
			</Typography>
			<Typography component="div" variant="body1">
				Our Website allows users to share advertisements and other information
				with other users, thereby making this shared information accessible to
				other users. Since our Website also enables you to directly contact a
				buyer or seller, we recommend that you consider how you share your
				personal information with others. You are solely responsible for the
				personal information you share through our Website and therefore we
				cannot guarantee the privacy or security of the information shared by
				you with other users.
			</Typography>
			<Typography component="div" variant="body1">
				In case you visit our Website from a shared computer or a computer in an
				internet cafe, we strongly recommend that you log off after each
				session. If you do not want the shared computer to remember you and/or
				your credentials, you will need to remove cookies and/or the history of
				your website visits.
			</Typography>
			<Typography component="div" variant="body1">
				AdvertizePro LLC may process and keep your personal information on
				servers in the United States and Canada.
			</Typography>
			<Typography component="h2" variant="h5" className={classes.vH5}>
				Advertising
			</Typography>
			<Typography component="div" variant="body1">
				You agree that we may use the information collected by us to send you
				offers, whether personalized or not, or to contact you by telephone
				regarding products or Services offered by AdvertizePro LLC.
				<br />
				We will not sell or rent your personal information to third parties for
				their marketing purposes without your explicit consent. We may combine
				your information with information we collect from other companies and
				use it to improve and personalize our Services and functionalities.
			</Typography>
			<Typography
				component="div"
				variant="body1"
				style={{ fontWeight: 'bold' }}
			>
				Email Newsletters and Push Notifications
			</Typography>
			<Typography component="div" variant="body1">
				Where permitted by applicable law, we may contact you and/or send to you
				commercial communications via electronic communications, such as email,
				to inform about our products, services, offers, or any commercial
				content related to the company. If you do not want to receive marketing
				emails from us, you can always opt-out by following the unsubscribe
				instructions provided in such emails. Please note that even if you
				opt-out from receiving commercial communications, you may still receive
				administrative communications from AdvertizePro LLC, such as
				notifications about your account activities (e.g. account confirmations,
				password changes, etc.), and any other important announcements. We may
				also send you push notifications if you have opted-in to receive them.
				You can disable push notifications in your mobile device’s settings.
			</Typography>
			<Typography component="h2" variant="h5" className={classes.vH5}>
				Cookies
			</Typography>
			<Typography component="div" variant="body1">
				When you use our Services, we may place cookies (small data files on
				your phone or mobile device’s drive) or similar technologies. We use
				cookies to help us identify you as a user, to provide you a better
				experience on our Website, to measure promotional effectiveness and to
				ensure trust and safety on our Website.
			</Typography>
			<Typography component="h2" variant="h5" className={classes.vH5}>
				Accessing, Reviewing and Changing Your Personal Information
			</Typography>
			<Typography component="div" variant="body1">
				We cannot modify your personal information or account information. You
				can modify your own information by logging into your Advertize account.
				When you place a classified ad, you may not be able to change your
				listing or delete your message. If you want to close your account (where
				applicable) with us, please send us a request to us at following e-mail
				address privacy@advertizepro.com. We will process your request within a
				reasonable period of time and process your personal information in
				accordance with applicable law.
			</Typography>
			<Typography component="h2" variant="h5" className={classes.vH5}>
				Our commitment to secure the personal information we have collected
			</Typography>
			<Typography component="div" variant="body1">
				We seek to use reasonable organizational, technical and administrative
				security measures (such as firewalls, data encryption) to protect
				personal information within our Company. No website or Internet
				transmission is, however, completely secure. Consequently, AdvertizePro
				LLC cannot guarantee that unauthorized access, hacking, data loss, or
				other breaches will never occur. Your use of the App and Services is at
				your own risk. AdvertizePro LLC urges you to take steps to keep your
				personal information safe by memorizing your password or keeping it in a
				safe place. If you have reason to believe that your interaction with us
				is no longer secure (for example, if you feel that the security of your
				account has been compromised), please immediately notify us at
				privacy@advertizepro.com
			</Typography>
		</Paper>
	);
};

export default withApollo({ ssr: true })(PrivacyPolicy);
