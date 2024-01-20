const express = require("express")

const app = express()

const userRoutes = require("./modules/user/routes/userRoutes")

app.use(express.json())
app.use("/user", userRoutes)

module.exports = app