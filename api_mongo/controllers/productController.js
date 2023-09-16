import { faker } from '@faker-js/faker'
import Product from '../models/Product.js'


const generate_product = async (req, res) => {
    try {
        const products = []
        for (let i = 0; i < 10; i++) {
            const fakeProduct = {
                image: faker.image.urlLoremFlickr({
                    height: 320,
                    width: 320,
                    category: 'technics'
                }),

                imageCollections: [{
                    img1: faker.image.urlLoremFlickr({
                        height: 320,
                        width: 320,
                        category: 'technics'
                    }),
                    img2: faker.image.urlLoremFlickr({
                        height: 320,
                        width: 320,
                        category: 'technics'
                    }),
                    img3: faker.image.urlLoremFlickr({
                        height: 320,
                        width: 320,
                        category: 'technics'
                    })
                }],
                product: faker.commerce.product(),
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                material: faker.commerce.productMaterial(),
                productAdjective: faker.commerce.productAdjective(),
                rating: faker.number.float({
                    min: 1, max: 5, precision: 0.01
                }),
                price: faker.commerce.price({ min: 10, max: 1000, dec: 0, symbol: '₹', precision: 0.01 })
            }
            products.push(fakeProduct)
        }

        await Product.insertMany(products)
        console.log("Generated and saved 10 fake products.")

        res.status(200).json({
            message: "Product generated successfully",
            products
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error generating products..."
        })
    }
}

export { generate_product }
