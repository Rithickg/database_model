import { faker } from '@faker-js/faker'
import User from '../models/User.js'

const generate_users = async (req, res) => {
    try {
        const users = []
        for (let i = 0; i < 10; i++) {
            const fakeUser = {
                avatar: faker.internet.avatar(),
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                email: faker.internet.email({ allowSpecialCharacters: true }),
                username: faker.internet.userName(),
                password: faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/ })

            }
            users.push(fakeUser)
        }

        await User.insertMany(users)
        console.log("Generated and saved 10 fake users.")

        res.status(200).json({
            message: "User generated successfully",
            users
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error generating users..."
        })
    }
}

const view_users = async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json({
            message: "Users found",
            users
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error finding the users..."
        })
    }
}

export { generate_users, view_users }
