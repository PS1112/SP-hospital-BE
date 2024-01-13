const express = require('express')
const app = express()
const env = process.env.NODE_ENV 
console.log(env)
if (env === "dev") {
    require('dotenv').config({path: "./local.env"})    
} else {
    require('dotenv').config({path: "./prod.env"})    
}
const port = process.env.APP_PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`App running on port ${port}`)
  })