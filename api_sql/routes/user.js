import express from 'express'
import { generate_user } from '../controllers/userController.js'

const router = express.Router()

router.get('/generate-user', generate_user)


export default router