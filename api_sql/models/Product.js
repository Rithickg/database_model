import { sequelize } from "../config/db.js"
import { DataTypes } from "sequelize"

const Product = sequelize.define('Product', {
    email: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    image: {
        type: DataTypes.STRING
    },
    imageCollections: {
        type: DataTypes.ARRAY(DataTypes.JSON)
    },
    product: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    material: {
        type: DataTypes.STRING
    },
    productAdjective: {
        type: DataTypes.STRING
    },
    rating: {
        type: DataTypes.FLOAT
    },
    price: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
})



export default Product