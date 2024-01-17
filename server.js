const express = require('express')
// const conn = require("./db")
// const userService = require("./modules/user/service/userService")
const app = express()
const env = process.env.NODE_ENV 
if (env === "dev") {
    require('dotenv').config({path: "./local.env"})    
} else {
    require('dotenv').config({path: "./prod.env"})    
}
const port = process.env.APP_PORT

app.get("/",(req,res) => {
  res.json({
    status: "succes",
    data: "hey there!!!..."
  })
})
// app.post("/sign-up", (req,res) => {
//   const userData = req.body
//   const user = userService.registerUser(userData)
// })
  app.listen(port, () => {
    console.log(`App running on port ${port}`)
  })