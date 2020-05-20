import { baseUrl,backend } from './AxiosInstances'

export const updateArticle = (article_id,content) => {
	const endpoint = `/${baseUrl}/articles`
	return backend.put(endpoint,{article_id:article_id,content:content})
}

export const saveNewArticle = (article_id,content) => {
	const endpoint = `/${baseUrl}/articles/${article_id}`
	return backend.post(endpoint,{article_id:article_id,content:content})
}