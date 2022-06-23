const mongoose = require('mongoose')

const StudentSchema= new mongoose.Schema({
    name: {
        type : String,
        required : [true,"Please Enter your name"]
    },
    email: {
        type: String,
        required : [true,"Please Enter your email"],
        unique : true
    },
    pid: {
        type : Number,
        required : [true,"Please Enter your pid"],
        unique : true
    },
    password: {
        type : String,
        required : [true,"Please Enter your password"]
    },
},{timestamps:true})

module.exports = mongoose.model("Student_User",StudentSchema)