import { baseUrl, backend } from './AxiosInstances'
import { httpPost } from '../util/request'

export const fetchMetaData = () => {
	const endpoint = '/meta'
	return backend.get(endpoint)
}

export const fetchUserData = userId => {
  const endpoint = `/users/${userId}`
  return backend.get(endpoint)
}

// export const login = () => {
// 	window.location.href = `${baseUrl}/login`
// }

export const login = () => {
	const mockServer = 'https://e8cf77b9-33b9-46c4-b7e5-f79e62e478e8.mock.pstmn.io/api/login'
	return httpPost(mockServer, [])
}

export const logout = () => {
	const endpoint = '/logout'
	return backend.get(endpoint)
}
