const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique:true
    },
    phone : {
        type: Number,
        required: true
    },
    work : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    cpassword : {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type:String,
                required: true
            }
        }
    ]
})


//bcrypt password
userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12)
        this.cpassword = await bcrypt.hash(this.cpassword, 12)
    }
    next();
});

userSchema.methods.generateAuthToken = async function(){
    try{
        let jwttoken = jwt.sign({_id: this._id}, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token: jwttoken})
        await this.save();
        return jwttoken
    }
    catch(error){
        console.log(error)
    }
}

const User = mongoose.model('USER', userSchema)
module.exports = User;