import express from 'express'
import { generate_product } from '../controllers/productController.js'

const router = express.Router()

router.get('/generate-product', generate_product)


export default router