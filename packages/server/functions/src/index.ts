import bodyParser from 'body-parser'
import cors from 'cors'
import express, { Application } from 'express'
import { https, logger } from 'firebase-functions'

const app: Application = express()

app.use(cors)

app.use(bodyParser.json())

export const helloWorld = https.onRequest((request, response) => {
  logger.info('Hello logs!', { structuredData: true })
  response.send('Hello from Firebase!')
})
