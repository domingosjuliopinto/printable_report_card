require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')


const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

//Routes
app.use('/',require('./routes/teacherrouter'))
app.use('/',require('./routes/studentrouter'))
app.use('/',require('./routes/se_routes/cmpn3router'))
app.use('/',require('./routes/se_routes/cmpn4router'))

//Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true
},err=>{
    if(err) throw err;
    console.log("Connected to mongodb")
})

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log('Server is running on port ',PORT)
})