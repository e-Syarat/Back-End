const app = require ("./app.js")
const sequelize = require("./utils/db.js");
const dotenv = require("dotenv");
const express = require("express");
dotenv.config()
express.Router()
const PORT = process.env.PORT

const startServer = async () => {
    try {
        sequelize;
        console.log("Database connected successfully")
        
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (error) {
        console.error('Failed to start server:',error)
        process.exit(1)
    }
}

startServer()