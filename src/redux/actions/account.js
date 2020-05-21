import { AUTHENTICATE, DEAUTHENTICATE, SET_USER_DATA, LOGIN, LOGOUT} from '../actionTypes'
import { fetchUserData, login } from '../../services/AccountService'

export const initUserData = userId => async dispatch => {
	const userData = await fetchUserData(userId)

	const validatedName =
		userData.name === 'None' ? userData.githubUsername : userData.name

	dispatch({
		type: SET_USER_DATA,
		userData: { ...userData, name: validatedName }
	})
}

export const userLogin = () => async (dispatch) => {
	let userProfile =  await login()
	userProfile = await userProfile.json()
	userProfile = userProfile.profile
	localStorage.setItem('profile', JSON.stringify(userProfile))
	dispatch({
		type: LOGIN,
		userData: userProfile
	})
}

export const userLogout = () => {
	localStorage.removeItem('profile')
	return({
		type: LOGOUT
	})
}

export const authenticate = meta => {
	localStorage.setItem('meta', JSON.stringify(meta))
	return {
		type: AUTHENTICATE,
		meta
	}
}

export const deauthenticate = () => {
	localStorage.removeItem('meta')

	if (window.location.pathname !== '/') {
		console.log('ok')
		window.location.replace('/')
	}

	return {
		type: DEAUTHENTICATE
	}
}