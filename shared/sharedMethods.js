const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV 
if (env === "dev") {
    require('dotenv').config({path: "./local.env"})    
} else {
    require('dotenv').config({path: "./prod.env"})    
}

exports.generateAuthToken = (username) => {
    return jwt.sign(username, process.env.JWT_SECRET, { expiresIn: '1d' });
  }