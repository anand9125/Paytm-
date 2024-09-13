// Allow user to sign up.
// Allow user to sign in.
// schema refers to the structure or blueprint that defines how data is organized in your database
 //Allow user to update their information (firstName, lastName, passwor
// backend/db.js
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://akdon9936:d0T1uwh4HIzFDKow@cluster0.0vifew6.mongodb.net/")
const userSchema = mongoose.Schema({
    username :{
       type :String,
       required :true,
       unique:true,
       trim :true,
       lowercase :true,
       minLength : 3,
       maxLength: 30
    },
    password:{
        type :String,
        required :true,
        unique:true,
        trim:true,
        minLength :6
    },
    firstName :{
        type:String,
        required:true,
        trim: true,
        maxLength:50
    },
    lastName:{
        type:String,
        required :true,
        trim:true,
        maxLength:50
    }
})
const  User = mongoose.model("user" ,userSchema)
module.exports={
    User
}