const Teachers = require('../models/teacherModel')

const authTeach = async (req, res, next) => {
    try {
        const user = await Teachers.findOne({_id: req.user.id})

        if(!user.subject) 
            return res.status(500).json({msg: "Teacher's resources, access denied."})

        next()
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = authTeach