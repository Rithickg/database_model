import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import productRoute from './routes/product.js'
import userRoute from './routes/user.js'


const app = express()
app.use(express.json())
app.use(cors())

dotenv.config({ path: './.env' })

app.use('/api', productRoute)
app.use('/api', userRoute)


export { app }