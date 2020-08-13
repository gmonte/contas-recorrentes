import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import functions from 'firebase-functions'

const app: express.Application = express()

app.use(cors)

app.use(bodyParser.json())

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true })
  response.send('Hello from Firebase!')
})
