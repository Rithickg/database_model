import { Sequelize } from 'sequelize'


const sequelize = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    port: process.env.POSTGRES_PORT,
    username: 'postgres',
    password: process.env.POSTGRES_PASS || "Rithickg567@",
    database: 'test_sql',
    logging: false
})

const DbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.")
    } catch (error) {
        console.error("Unable to connect to the database:", error)
    }
}

export { sequelize, DbConnection };