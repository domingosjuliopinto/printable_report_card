const mongoose = require('mongoose')

const teacherSchema= new mongoose.Schema({
    name: {
        type : String,
        required : [true,"Please Enter your name"]
    },
    email: {
        type: String,
        required : [true,"Please Enter your email"],
        unique : true
    },
    subject: {
        type : String,
        required : [true,"Please Enter your subject"]
    },
    password: {
        type : String,
        required : [true,"Please Enter your password"]
    },
},{timestamps:true})

module.exports = mongoose.model("Teacher_User",teacherSchema)