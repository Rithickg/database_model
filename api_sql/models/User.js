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


User.sync().then(() => {
    console.log("User Model synced");
});

export default User

