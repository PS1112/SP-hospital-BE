const express = require("express")
const router = express.Router();

const userService = require("../service/userService")

//routes
router.post("/sign-up",userService.registerUser);

module.exports = router