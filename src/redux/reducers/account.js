import { AUTHENTICATE, DEAUTHENTICATE, SET_USER_DATA, LOGIN, LOGOUT} from '../actionTypes'

const storedMeta = localStorage.getItem('meta')
const profileData = localStorage.getItem('profile')

const initialState = {
	meta: JSON.parse(storedMeta),
	user: profileData ? JSON.parse(profileData) : null
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTHENTICATE:
			return {
				...state,
				meta: action.meta
			}

		case DEAUTHENTICATE:
			return {}

		case SET_USER_DATA:
			return {
				...state,
				user: action.userData
			}
		case LOGIN:
			return {
				...state,
				user: action.userData
			}
		case LOGOUT:
			return {}
		default:
			return state
	}
}

export default reducer
