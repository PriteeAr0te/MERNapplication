const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')

require('../db/conn');
const User = require('../models/userSchema');
router.get('/', (req, res) =>{
    res.send("Hello World from router js");
});

// route for user Registration
router.post('/register', async(req, res)=>{
    const {name, email, phone, work, password, cpassword} = req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"All Fields are Compulsory"})
    }

    try{
        const userExist = await User.findOne({email: email})
        if(userExist){
            return res.status(409).json({error:'User already exists'});
        }
        else if(password !== cpassword){
            return res.status(409).json({error:"Password Missmatch"});
        }
        else{
            const user = new User({name, email, phone, work, password, cpassword});

            await user.save()
            res.status(201).json({message:"User Registered Successfully"})
        
        }
       
    }
    catch(err){
        res.status(500).json({error:"Failed to register", err})
    }
});

//Route for user login 

router.post('/login', async(req,res)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(422).json({message: "Enter Valid Credentials"});
        }

        const userLogin = await User.findOne({email:email});

       if(userLogin){
        const isMatch = await bcrypt.compare(password, userLogin.password)

        const token = await userLogin.generateAuthToken();
        console.log(token)

        res.cookie("jwttoken", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true
        });

        if(!isMatch){
            res.status(400).json({error:"Invalid credentials"})
        }
        else{
            res.status(201).json({message:"User Login Successfully"})
        }

       }else{
        res.status(400).json({error:"Invalid credentials"})
       }
    }
    catch(err){
        res.status(500).json({error:"Failed to Login", err});
    }
});


module.exports = router;