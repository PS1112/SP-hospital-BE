const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const env = process.env.NODE_ENV 
if (env === "dev") {
    require('dotenv').config({path: "./local.env"})    
} else {
    require('dotenv').config({path: "./prod.env"})    
}

exports.generateAuthToken = (username) => {
    return jwt.sign({username: username}, process.env.JWT_SECRET, { expiresIn: '1d' });
  }

exports.generateHashPassword = async (password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword
}

exports.validateHashedPassword = async (enterdPassord, hashedPassword) =>{
    const result = await bcrypt.compare(enterdPassord, hashedPassword);
    return result
}