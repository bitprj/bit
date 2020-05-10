import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import logo from './logo.svg';
import Home from './components/Home'

const App = () => {
	return (
		<BrowserRouter>
              <Switch>
                  <Route path="/" exact component={Home} />
              </Switch>
		</BrowserRouter>
	)
}

export default App
