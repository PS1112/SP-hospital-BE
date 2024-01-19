const shared = require("../../../shared/sharedMethods")
const conn = require("../../../db")

exports.registerUser = async (userData) => {

    const{ firstName, lastName, dob, gender, phoneNumber, emailId, role } = userData

    const sqlQuery = "INSERT INTO user ( firstName, lastName, dob, gender, phoneNumber, emailId, role, onBoardingStep) VALUES ?"

    const sqlValues = [firstName,lastName,dob,gender,phoneNumber,emailId,role,1]

    const user = conn.query(sqlQuery,[sqlValues],(error,result) => {
        if (error) {
            res.json({
                status: "failed",
                code: error.code,
                message: error.message
            })
        } else {
            return result.insertId
        }
    })

    console.log(user)
    return user

    
}