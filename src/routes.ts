import express from 'express'
import { SendQuestionController } from './controllers/send-question'

const routes = express()

routes.post('/question', new SendQuestionController().handle)

export default routes