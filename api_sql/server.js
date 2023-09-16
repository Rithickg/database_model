import { app } from './app.js'
import { DbConnection } from './config/db.js'


const Server = async () => {
    const port = process.env.PORT || 3000
    try {
        await DbConnection()

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`)
        })

    } catch (error) {
        console.log("Error connecting to server :", error)
    }
}

Server()