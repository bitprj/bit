import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import NavBar from '../NavBar/Navbar'

const Main = styled.main`
	background-color: #f9fafa;
	position: relative;
`

const WithNavBar = props => (
	<>
		<Switch>
			<Route path="/" component={NavBar} />
		</Switch>
		<Main>{props.children}</Main>
	</>
)

export default WithNavBar
