import React from 'react'

import WithErrorBoundaries from './WithErrorBoundaries'
import WithNavBar from './WithNavBar'

const WithGlobalHOC = ({ children }) => (
	<WithNavBar>
		<WithErrorBoundaries>{children}</WithErrorBoundaries>
	</WithNavBar>
)

export default WithGlobalHOC
