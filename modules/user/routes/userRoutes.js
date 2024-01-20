const express = require("express")
const router = express.Router();

const userService = require("../service/userService")

//routes
router.post("/test",userService.generateTestToken);
router.post("/sign-up",userService.registerUser);
router.post("/sign-in",userService.login);

module.exports = router