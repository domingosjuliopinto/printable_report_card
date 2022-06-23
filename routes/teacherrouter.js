const router = require('express').Router()
const teacherctrl = require('../controllers/teacherctrl')
const auth = require('../middleware/auth')

router.post('/register',teacherctrl.register )
router.post('/activation', teacherctrl.activateEmail)
router.post('/login', teacherctrl.login)
router.get('/refresh_token', teacherctrl.getAccessToken)
router.post('/forgot', teacherctrl.forgotPassword)
router.post('/reset', auth, teacherctrl.resetPassword)
router.get('/info', auth, teacherctrl.getUserInfo)
router.get('/logout', teacherctrl.logout)
router.patch('/update', auth, teacherctrl.updateUser)

module.exports=router