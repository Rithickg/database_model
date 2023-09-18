import express from 'express'
import { generate_users, view_users } from '../controllers/userController.js'

const router = express.Router()

router.post('/generate-users', generate_users)
router.get('/view-users', view_users)


export default router