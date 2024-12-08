import axios from 'axios';

export const api = axios.create({
	baseURL: '/api/',
  });

export const postSnippet = async (text: string) =>{
	const res = await api.post("Upload/Snippet",
		{
			Text: text
		}
	)
	return res
}