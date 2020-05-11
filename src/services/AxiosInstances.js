import axios from 'axios'
import camelCase from 'camelcase-keys-deep'

/** GENERAL BACKEND (mainly for GET) */

const backendResponseInterceptor = error => {
	if (!error.response) {
		throw Error(
			'A so called "CORS" error likely occurred. The request bounced.'
		)
	}
	const {
		status,
		statusText,
		config: { method, url },
		data: { message, msg }
	} = error.response


	if (message !== 'Card already unlocked')
		alert(`${method.toUpperCase()} ${url}
      ${status} (${statusText})
      ${message ?? msg ?? ''}`)
	return error
}

// export const baseUrl = 'https://wongband.pythonanywhere.com/'
// export const baseUrl = 'https://bit-backend-staging.herokuapp.com/'
// const baseUrl = 'https://darlene-backend.herokuapp.com/'
// export const baseUrl = 'https://214509c7.ngrok.io'
export const baseUrl = 'http://localhost:5000/api/'

export const backend = axios.create({
	baseURL: baseUrl,
	withCredentials: true
})
backend.interceptors.response.use(
	response => camelCase(response.data, { deep: true }),
	error => backendResponseInterceptor(error)
)

/** BACKEND_SAVES (with CSRF, mainly for PUT, POST, DELETE) */

// window.onbeforeunload = e => {
// 	e.preventDefault()
// 	e.returnValue('Changes may not be saved. Continue?')
// 	return 'Changes may not be saved. Continue?'
// }
export const backendSaves = axios.create({
	baseURL: baseUrl,
	withCredentials: true
})
backendSaves.interceptors.response.use(
	response => camelCase(response.data, { deep: true }),
	error => backendResponseInterceptor(error)
)

const cdnBaseUrl = 'https://d36nt3c422j20i.cloudfront.net/'
export const cdn = axios.create({
	baseURL: cdnBaseUrl
})
cdn.interceptors.response.use(response =>
	camelCase(response.data, { deep: true })
)
