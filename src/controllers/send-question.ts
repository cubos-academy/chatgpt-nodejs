import { Request, Response } from "express"
import { axiosCreate } from "../services/axios"

type ResponseGpt = {
	id: string,
	object: string,
	created: number,
	model: string,
	choices: [
		{
			index: number,
			message: {
				role: string,
				content: string
			},
			finish_reason: string
		}
	],
	usage: {
		prompt_tokens: number,
		completion_tokens: number,
		total_tokens: number
	}
}

export class SendQuestionController {
	async handle(req: Request, res: Response) {
		const { question } = req.body

		try {
			const result = await axiosCreate.post('/chat/completions', {
				model: "gpt-3.5-turbo",
				messages: [{role: "user", content: question}]
			})
	
			const response = result.data as ResponseGpt

			const choices = response.choices.map(choice => {
				return {
					text: choice.message.content
				}
			})

			return res.json({
				response: choices.map(item => item.text).join(' ')
			})
		} catch (error) {
			console.log(error)
		}
	}
}