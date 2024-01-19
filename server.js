const conn = require("./db"
)
const app = require("./routes")
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
  app.listen(port, () => {
    console.log(`App running on port ${port}`)
  })