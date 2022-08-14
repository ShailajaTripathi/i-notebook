const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now //We are not calling here just assigning it into another variable
    }
})

module.exports = mongoose.model('user',UserSchema);

//This file is related to mongoose read the official Doc for the change