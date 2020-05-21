import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { userLogin } from '../../redux/actions/account.js'


import Button from '../shared/low/Button'

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';

import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';


const contentHeight = '2.2em'

const Nav = styled.nav`
	height: 2em;
	padding: 0.8em 1em;
	box-shadow: 0 4px 30px 0 rgba(144, 144, 144, 0.2);
	display: flex;
	align-items: center;
	justify-content: space-around;
`

const NavElement = styled.div`
	margin: 0 1em;
	display: flex;
	align-items: center;
`

const AlignRight = styled.div`
	${props => (props.isStudent ? '' : 'flex-grow: 1;')}
	display: flex;
	align-items: center;
	justify-content: flex-end;
`

const PostButton = styled(Button)`
	margin-left: 2em;
	padding: 0.4em 1em;
	
	font-family: Apercu Pro;
	font-style: normal;
	font-size: 1em;
	font-weight: bold;
	line-height: 1.2em;

	text-align: center;
`

const ButtonConfig = {
    dark: '#2188FF',
}

const Logo = styled.p`
	margin: 0 1em;
    font-family: Apercu Pro;
	font-style: normal;
	font-weight: bold;
	font-size: 30px;
	line-height: 37px;

	white-space:nowrap;
`
const NotificationButton = styled(NotificationsIcon)`
	margin-left: 1.5em;
	color: #FFAC33;
`

const SearchBar = styled(InputBase)`
	width: 100%;
	padding-left: 0.5em;
	border-radius: 5px;
	background: #EDEDED;
`

const MenuButton = styled(MenuIcon)`
	margin-left: 1.5em;
	color: #D2D2D2;
`

const SignInCard = styled.div`
	margin-top: 1.5em;
	width: 20em;
	height: 20em;
	border-radius: 5px;
	background: #FFFFFF;
`
const WelcomeImg = styled.div`
    width: 100%;
    height: 75%;
    background: url(https://s3-alpha-sig.figma.com/img/8a27/c1b1/1462b5022175626624e01bae88b9b40a?Expires=1590364800&Signature=DSi5-wzf68mhEAmHCWMg93SskTTQF~SfaSBLnJS9btiv9D1r3iP5OSspanpI5-zWZ-lhHKDbtMEMcWc3kRjz7ocAP8cxkHEBVQh2~cF~QtVLZJ9c2TutCgFAHEN6EhxBAJfEjjNXFKE6y91IMNW6Pzuc4S3qOBZpG1hQRKNAM6jO~hcgbrx-aOQnk7RN1xah7fSakA7LRvHPpV0SwxW4GLv9zb4q3j3Wc21JinQp3OPivlokYpKTl251rJwJIIGBS-JBs~q2mu6sdRb0hS8Ok--0myTGWpma-Fe~o3HV~tJqfmaxXiDcMP3-7SzfEOHiX7~iRNvRJs8B-A943RHR6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA);
	background-size: 120% 100%;
`

const SignInText = styled.p`
	margin-top: 20px;
	font-family: Apercu Pro;
	font-style: normal;
	font-weight: bold;
	font-size: 1.5em;
	text-align: center;
`

const ProfilePhoto = styled(Avatar)`
	margin-left: 1.5em;
`

const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	  '& > *': {
		margin: theme.spacing(1),
	  },
	},
}));

const NavBar = ({
	userProfile,
	onLogin
}) => {
	// This is what you would use to call the API
	// useEffect(() => {
	// 	const meta = fetchMetaData()
	// }, [])
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [open, setOpen] = React.useState(false);
	const [placement, setPlacement] = React.useState();

	const handleMenuClick = (newPlacement) => (event) => {
		setAnchorEl(event.currentTarget);
		setOpen((prev) => placement !== newPlacement || !prev);
		setPlacement(newPlacement);
	}

	let userID = null
	let profileUrl = null
	if(userProfile){
		userID = userProfile.user_id
		profileUrl = userProfile.profile
	}

	const classes = useStyles();

	return (
		<>
			{!userID &&
				<Popper open={open} anchorEl={anchorEl} placement={placement} transition>
					{({ TransitionProps }) => (
					<Fade {...TransitionProps} timeout={350}>
						<SignInCard>
							<WelcomeImg />
							<SignInText onClick={onLogin}>
								Sign In / Sign Up
							</SignInText>
						</SignInCard>
					</Fade>
					)}
				</Popper>
			}
			<Nav id="nav-bar">
				<Logo>Bit Project</Logo>
				<SearchBar />
				<AlignRight>
					<PostButton invert {...ButtonConfig}>
						Write a post
					</PostButton>
					<NotificationButton/>
					{!userID &&
						<MenuButton onClick={handleMenuClick('bottom-end')} />
					}
					{userID &&
						<div className={classes.root}>
							<ProfilePhoto src={profileUrl}/>
						</div>
					}
				</AlignRight>
			</Nav>
		</>
	)
}

const mapStateToProps = state => ({
    userProfile: state.account.user
})

const mapDispatchToProps = dispatch => ({
	onLogin: () => dispatch(userLogin())
})


export default connect(mapStateToProps, mapDispatchToProps)(NavBar)