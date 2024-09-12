const mongoose = require('mongoose')


const studentschema = new mongoose.Schema
({

    name: 
    {
        type: String,
        required: true
    },
    email: 
    {
        type: String,
        required: true
    },
    mobile:
    {
        type: Number,
        required: true
    },
    tech: 
    {
        type: String,
        required: true
    },
    sub: 
   {
        type: Boolean,
        required: true,
        default: false
    },
    rollno:
    {
        type:Number,
        required:true
    },
    branch:
    {
        type:String,
        required:true
    }


})

module.exports = mongoose.model('student',studentschema)