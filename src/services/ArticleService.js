import { baseUrl,backend } from './AxiosInstances'

export const updateArticle = (article_id,content,images) => {
	const endpoint = `/${baseUrl}/articles/${article_id}`
	return backend.put(endpoint,{content:content,cover_image:images})
}

export const saveNewArticle = (content,images) => {
	const endpoint = `/${baseUrl}/articles`
	return backend.post(endpoint,{content:content,cover_image:images})
}