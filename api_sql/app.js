import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoute from './routes/user.js'
import productRoute from './routes/product.js'


const app = express()
app.use(express.json())
app.use(cors())

dotenv.config({ path: './.env' })

app.use('/api', userRoute)
app.use('/api', productRoute)


export { app }