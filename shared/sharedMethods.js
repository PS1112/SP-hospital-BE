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
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword       
    } catch (error) {
        throw error;   
    }
}

exports.validateHashedPassword = async (enterdPassord, hashedPassword) =>{
    try {
        const result = await bcrypt.compare(enterdPassord, hashedPassword);
        return result      
    } catch (error) {
        throw error;
    }
}