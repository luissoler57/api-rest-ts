import 'dotenv/config'
import express, { Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { router } from './routes/'

const app: Application = express()

//*Setting
app.set('port', process.env.PORT)

// //* Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//* Routes
app.use(router)

export default app
