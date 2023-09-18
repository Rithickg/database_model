import { sequelize } from '../config/db.js'
import { DataTypes } from 'sequelize'


const User = sequelize.define('User', {
    avatar: {
        type: DataTypes.STRING
    },
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: true
})



export default User

