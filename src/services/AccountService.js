import { baseUrl, backend } from './AxiosInstances'

export const login = () => {
	window.location.href = `${baseUrl}/login`
}

export const logout = () => {
	const endpoint = '/logout'
	return backend.get(endpoint)
}
