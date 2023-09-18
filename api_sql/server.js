import { app } from './app.js'
import { DbConnection, sequelize } from './config/db.js'


const Server = async () => {
    const port = process.env.PORT || 3000
    try {
        await DbConnection()

        try {
            sequelize.sync()
            console.log("Synced database.");
        } catch (error) {
            console.log("Failed to sync db: " + error.message);
        }


        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`)
        })

    } catch (error) {
        console.log("Error connecting to server :", error)
    }
}

Server()





