import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import ticketRoute from './routes/ticketRoutes.js'
import ConnectDB from './database/db.js'
dotenv.config()
const port = process.env.PORT || 7000
const app = express()
mongoose.set('strictQuery', true)
ConnectDB()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/tickets', ticketRoute)

app.listen(port, () => console.log(`Server Start on port ${port}`))