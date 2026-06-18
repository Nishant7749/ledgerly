const express = require('express')
 const router = express.Router()

const {SignUp, LogIn} = require("../controller/authController")

router.post('/signup', SignUp)
router.post('/login', LogIn)

module.exports = router