import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import WithGlobalHOC from './components/HOC/WithGlobalHOC'

const App = () => {
	return (
		<BrowserRouter>
			<WithGlobalHOC>
				<Switch>
					<Route path="/" exact component={Home} />
				</Switch>
			</WithGlobalHOC>
		</BrowserRouter>
	)
}

export default App
