import { faker } from '@faker-js/faker'
import User from '../models/User.js'

const generate_user = async (req, res) => {
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
        await User.bulkCreate(users)

        // const fakeUser = {
        //     avatar: 'fy',
        //     firstName: 'fy',
        //     lastName: 'fy',
        //     email: 'fy',
        //     username: 'fy',
        //     password: 'fy'

        // }

        // await User.create(fakeUser)
        // const us = await User.findAll()
        console.log("Generated and saved 10 fake users.")

        res.status(200).json({
            message: "User generated successfully",
            // us
            users
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error generating users..."
        })
    }
}

export { generate_user }
