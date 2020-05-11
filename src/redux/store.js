import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

import * as accountActions from './actions/account'

const actionCreators = {
	...accountActions
}

const configureStore = initialState => {
	const composeEnhancers =
		typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
					actionCreators,
					trace: true,
					traceLimit: 25
			  })
			: compose

	const middleware = [thunk]

	console.log(process.env.NODE_ENV)
	if (process.env.NODE_ENV !== 'production')
		middleware.unshift(
			require('redux-immutable-state-invariant').default({
				ignore: ['learnData.currentCardUnnestedUnlockedHintRefs']
			})
		)

	const store = createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(...middleware))
	)

	// Enable Webpack hot module replacement for reducers
	// if (module.hot) {
	// 	module.hot.accept('./reducers', () =>
	// 		store.replaceReducer(require('./reducers'))
	// 	)
	// }

	return store
}

const store = configureStore()

export default store
