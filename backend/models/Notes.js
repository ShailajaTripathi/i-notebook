const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    tag:{
        type:String,
        default:"General"
    },
    date:{
        type:Date,
        default:Date.now //We are not calling here just assigning it into another variable
    }
})

module.exports = mongoose.model('notes',NotesSchema);

//This file is related to mongoose read the official Doc for the change

