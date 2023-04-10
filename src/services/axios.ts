import axios from 'axios'

export const axiosCreate = axios.create({
	baseURL: 'https://api.openai.com/v1/',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${process.env.TOKEN_GPT}`
	}
})