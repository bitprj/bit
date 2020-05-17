import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { login, logout, fetchMetaData } from '../../services/AccountService'
import { deauthenticate } from '../../redux/actions/account'

import Button from '../shared/low/Button'
import Icon from '../shared/low/Icon'
import IconLine from '../shared/low/IconLine'

const contentHeight = '2.2em'

const Nav = styled.nav`
	padding: 0.8em 1em;
	box-shadow: 0 4px 30px 0 rgba(144, 144, 144, 0.2);
	display: flex;
	align-items: stretch;
	flex-wrap: wrap;
`

const NavElement = styled.div`
	margin: 0 1em;
	display: flex;
	align-items: center;
`

const AlignRight = styled.div`
	${props => (props.isStudent ? '' : 'flex-grow: 1;')}
	display: flex;
	justify-content: flex-end;
`

const NavButton = styled(Button)`
	color: black;
	margin: 0 0.5em;
	padding: 0.4em 1em;
	font-size: 80%;
`

const NavBar = () => {
	// This is what you would use to call the API
	// useEffect(() => {
	// 	const meta = fetchMetaData()
	// }, [])
	return (
		<>
			<Nav id="nav-bar">
				<NavElement style={{ height: contentHeight }}>
					<Link to="/">
						<Icon
							alt="Bit Project"
							src={require('../../assets/logo/logo.svg')}
							sharp
							width={contentHeight}
						/>
					</Link>
				</NavElement>

				<AlignRight>
					<NavButton invert onClick={login}>
						<IconLine>Login With GitHub</IconLine>
					</NavButton>
				</AlignRight>
			</Nav>
		</>
	)
}

export default NavBar
