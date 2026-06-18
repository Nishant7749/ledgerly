const User = require('../model/userSchema')
const bcrypt = require('bcrypt')

exports.SignUp = async(req, res)=> {
     try {
        const{email, password} = req.body
          if(!email || !password) {
            return res.status(404).json("All fields are required!")
          }

        const existUser = await User.findOne({email})
         if(existUser) {
            return res.status(400).json("User Already Exists!")
         }

        const hashedPass = await bcrypt.hash(password, 10)
        
        const newUser = await User.create({email, password: hashedPass})

        res.status(201).json({message: "User created successfully!", user: newUser})

        
     } catch (error) {
        res.status(500).json("Signup error!!")
     }
}


exports.LogIn = async(req,res)=> {
    try {
        const{email, password} = req.body
         if(!email || !password) {
            return res.status(404).json("All fields are required!")
         }

        const existUser = await User.findOne({email})
         if(!existUser) {
            return res.status(404).json("User does not exists!")
         } 

        const matchPass = await bcrypt.compare(password, existUser.password)
         if(!matchPass) {
            return res.status(400).json({message: "Incorrect Password!"})
         }

        res.status(200).json({message: "Logging In..."})
    } catch (error) {
        res.status(500).json("LogIn error!!")
    }
}