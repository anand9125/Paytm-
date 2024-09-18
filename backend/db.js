// Allow user to sign up.
// Allow user to sign in.
// schema refers to the structure or blueprint that defines how data is organized in your database
 //Allow user to update their information (firstName, lastName, passwor
// backend/db.js
// backend/db.js
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://akdon9936:tvRSITVcUvHt1PH2@cluster0.0vifew6.mongodb.net/")

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
         // Reference to User model   
       //mongoose.Schema.Types.ObjectId indicates that this field will store a MongoDB ObjectId
    //, which is a unique identifier for each document.
         ref: 'User',
 //This allows the userId field to be populated with data from a corresponding document in the User collection
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
	User,
  Account,
};