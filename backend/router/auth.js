const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const authenticate = require('../middleware/authenticate');
const cookieParser = require('cookie-parser'); 

require('../db/conn');
const User = require('../models/userSchema');

router.use(cookieParser());

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
            res.status(201).json({success, message:"User Registered Successfully"})
        
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
        const isMatch = await bcrypt.compare(password, userLogin.password);

        if(!isMatch){
            res.status(400).json({error:"Invalid credentials"})
        }

        const token = await userLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwttoken", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true
        });

        res.status(201).json({success:true, message:"User Login Successfully"})
        
        }
        else{
        res.status(400).json({error:"Invalid credentials"})
       }
    }
    catch(err){
        res.status(500).json({error:"Failed to Login", err});
    }
});
router.get('/about', authenticate, (req, res) => {
    res.send(req.rootUser);
});

router.get('/getdata', authenticate, (req, res) => {
    res.send(req.rootUser);
});

router.post('/contact', authenticate, async(req, res) => {
    try{
        const {name, email, phone, message} = req.body;
        if(!name || !email || !phone || !message){
            return res.json({error:"Please Fill Contact Form"})
        }

        const contactUser = await User.findOne({_id: req.userID})

        if(contactUser) {
            const userMessage = await contactUser.addMessage(name, email, phone, message);
            await contactUser.save();
            res.status(201).json({message:"Contact Message Send"});
        }
    }
    catch(err) {
        console.log(err);
        res.status(500).json({ error: "Failed to send contact message", err });
    }
});

// router.get('/logout', (req, res) => {
//     res.clearCookie('jwttoken', { path:'/' })
//     res.status(200).send('User LogOut')
// });


module.exports = router;