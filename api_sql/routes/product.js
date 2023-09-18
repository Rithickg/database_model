import express from 'express'
import { generate_products, view_products } from '../controllers/productController.js'

const router = express.Router()

router.post('/generate-products', generate_products)
router.get('/view-products', view_products)



export default router