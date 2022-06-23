const StudU = require('../models/studentModel')
const CMPN3m = require('../models/se_models/cmpn3Model')
const CMPN4m = require('../models/se_models/cmpn4Model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendMail = require('./sendMail')
const localStorage = require('localStorage')

const {CLIENT_URL} = process.env

const studentctrl = {
    register : async(req,res)=>{
        try{
            const {name, email, pid, password} = req.body
            
            if(!name || !email || !pid || !password)
                return res.status(400).json({msg: "Please fill in all fields."})

            if(!validateEmail(email))
                return res.status(400).json({msg: "Invalid email id."})

            const user = await StudU.findOne({email})
            if(user) return res.status(400).json({msg: "This email already exists."})

            const pidnum = await StudU.findOne({pid})
            if(pidnum) return res.status(400).json({msg: "This pid already exists."})

            const passwordHash = await bcrypt.hash(password, 12)

            const newStudent = {
                name, email, pid, password: passwordHash
            }

            const activation_token = createActivationToken(newStudent)

            const url = `${CLIENT_URL}/stuser/activate/${activation_token}`
            sendMail(email, url, "Student", "Verify your email address")


            res.json({msg: "Register Success! Please activate your email to start."})
        }catch(err){
            return res.status(500).json({msg : err.message})
        }
    },
    activateEmail: async (req, res) => {
        try {
            const {activation_token} = req.body
            const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET)

            const {name, email, pid, password} = user

            const check = await StudU.findOne({email})
            if(check) return res.status(400).json({msg:"This email already exists."})

            const newStudent = new StudU({
                name, email, pid, password
            })

            await newStudent.save()

            const sem1 = new CMPN3m({
                pid
            })

            await sem1.save()

            const sem2 = new CMPN4m({
                pid
            })

            await sem2.save()

            res.json({msg: "Account has been activated!"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    login: async (req, res) => {
        try {
            const {pid, password} = req.body
            const user = await StudU.findOne({pid})
            if(!user) return res.status(400).json({msg: "This pid does not exist."})

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(400).json({msg: "Password is incorrect."})

            const refresh_token = createRefreshToken({id: user._id})
    
            localStorage.setItem('rtoken',refresh_token)

            res.json({msg: "Login success!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    forgotPassword: async (req, res) => {
        try {
            const {email} = req.body
            const user = await StudU.findOne({email})
            if(!user) return res.status(400).json({msg: "This email does not exist."})

            const access_token = createAccessToken({id: user._id})
            const url = `${CLIENT_URL}/stuser/reset/${access_token}`

            sendMail(email, url, "Student", "Reset your password")
            res.json({msg: "To Re-set the password, please check your email."})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    resetPassword: async (req, res) => {
        try {
            const {password} = req.body
            const passwordHash = await bcrypt.hash(password, 12)

            await StudU.findOneAndUpdate({_id: req.user.id}, {
                password: passwordHash
            })

            res.json({msg: "Password successfully changed!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    forgotPID: async (req, res) => {
        try {
            const {email} = req.body
            const user = await StudU.findOne({email})
            if(!user) return res.status(400).json({msg: "This email does not exist."})

            const access_token = createAccessToken({id: user._id})
            const url = `${CLIENT_URL}/stuser/pid/${access_token}`

            sendMail(email, url, "Student", "Know your PID")
            res.json({msg: "To know your pid, please check your email."})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    knowPID: async (req, res) => {
        try {
            const user = await StudU.findOne({_id: req.user.id})
            const kpid = user.pid
            res.json({msg: "Your PID is "+[kpid]})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getUserInfo: async (req, res) => {
        try {
            const user = await StudU.findById(req.user.id).select('-password')

            res.json(user)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    logout: async (req, res) => {
        try {
           localStorage.removeItem('rtoken')
            return res.json({msg: "Logged out."})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateUser: async (req, res) => {
        try {
            const {name} = req.body
            await StudU.findOneAndUpdate({_id: req.user.id}, {
                name
            })

            res.json({msg: "Update Success!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const createActivationToken = (payload) => {
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})
}

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

module.exports = studentctrl