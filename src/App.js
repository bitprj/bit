import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import WithGlobalHOC from './components/HOC/WithGlobalHOC'
import Explore from "./components/pages/Explore";

const App = () => {
	return (
		<BrowserRouter>
			<WithGlobalHOC>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/explore" exact component={Explore} />
				</Switch>
			</WithGlobalHOC>
		</BrowserRouter>
	)
}

export default App
