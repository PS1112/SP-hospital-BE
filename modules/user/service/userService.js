const shared = require("../../../shared/sharedMethods")
const conn = require("../../../db")

exports.generateTestToken = async (req,res) => {
    console.log(req.body);
    const name = req.body.name
    const token = shared.generateAuthToken(name)
    res.json({
        status: "success",
        data:token
    })
}

exports.registerUser = async (req, res) => {
    const { firstName, lastName, username, dob, gender, phoneNumber, emailId, password, role } = req.body;

    console.log(req.body);

    const sqlQuery = "INSERT INTO user (firstName, lastName, username, dob, gender, phoneNumber, emailId, password, role, onBoardingStep) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1)";

    const hashedPassword = await shared.generateHashPassword(password);
    console.log(hashedPassword)
    const sqlValues = [firstName, lastName, username, dob, gender, phoneNumber, emailId, hashedPassword, role];

    conn.query(sqlQuery, sqlValues, (error, result) => {
        if (error) {
            res.status(500).json({
                status: "failed",
                code: error.code,
                message: error.message
            });
        } else {
            const userId = result.insertId;
            res.status(200).json({
                status: "success",
                code: 200,
                userId: userId
            });
        }
    });
};

exports.login = async (req,res) => {

    const {emailId, password} = req.body;

    const sqlQuery = `SELECT * FROM user WHERE emailId = "${emailId}"`;

    const userDetails = conn.query(sqlQuery,(err,result)=>{
        if (err) {
            res.json({
                status: "failed",
                code: err.code,
                message:err.message
            })
        } else {
            if(result.length < 1){
                res.json({
                    status: "failed",
                    code: 404,
                    message: "user with this email not found"
                })
            }

            const token = shared.generateAuthToken(result[0].username)

            const response = {
                firstName: result[0].firstName,
                lastName: result[0].lastName,
                username: result[0].username,
                dob: result[0].dob,
                gender: result[0].gender,
                phoneNumber: result[0].phoneNumber,
                emailId: result[0].emailId,
                role: result[0].role,
                onBoardingStep: result[0].onBoardingStep +=1 ,
            }
            res.json({
                status: "success",
                data: response,
                token: token
            })
        }
    })


    // res.status(200).json({
    //     status: "success",
    //     data: sqlQuery
    // })
    
};