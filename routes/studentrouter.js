const router = require('express').Router()
const studentctrl = require('../controllers/studentctrl')
const auth = require('../middleware/auth')

router.post('/stregister',studentctrl.register )
router.post('/stactivation', studentctrl.activateEmail)
router.post('/stlogin', studentctrl.login)
router.post('/stforgot', studentctrl.forgotPassword)
router.post('/streset', auth, studentctrl.resetPassword)
router.post('/fpid', studentctrl.forgotPID)
router.post('/kpid', auth, studentctrl.knowPID)
router.get('/stinfo', auth, studentctrl.getUserInfo)
router.patch('/stupdate', auth, studentctrl.updateUser)

module.exports=router