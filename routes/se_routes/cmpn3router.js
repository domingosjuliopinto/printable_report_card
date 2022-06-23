const router = require('express').Router()
const cmpn3ctrl = require('../../controllers/se_controllers/cmpn3ctrl')
const auth = require('../../middleware/auth')
const authTeach = require('../../middleware/authTeach')

router.get('/sem3show',auth,cmpn3ctrl.sem3show)
router.get('/studentall3',auth,cmpn3ctrl.studentall3)

router.patch('/am3edit',auth,authTeach,cmpn3ctrl.am3edit)
router.get('/am3all',auth,authTeach,cmpn3ctrl.am3all)
router.get('/am3stats',auth,authTeach,cmpn3ctrl.am3stats)

router.patch('/cgedit',auth,authTeach,cmpn3ctrl.cgedit)
router.get('/cgall',auth,authTeach,cmpn3ctrl.cgall)
router.get('/cgstats',auth,authTeach,cmpn3ctrl.cgstats)

router.patch('/dlcoaedit',auth,authTeach,cmpn3ctrl.dlcoaedit)
router.get('/dlcoaall',auth,authTeach,cmpn3ctrl.dlcoaall)
router.get('/dlcoastats',auth,authTeach,cmpn3ctrl.dlcoastats)

router.patch('/dsedit',auth,authTeach,cmpn3ctrl.dsedit)
router.get('/dsall',auth,authTeach,cmpn3ctrl.dsall)
router.get('/dsstats',auth,authTeach,cmpn3ctrl.dsstats)

router.patch('/dsgtedit',auth,authTeach,cmpn3ctrl.dsgtedit)
router.get('/dsgtall',auth,authTeach,cmpn3ctrl.dsgtall)
router.get('/dsgtstats',auth,authTeach,cmpn3ctrl.dsgtstats)

router.patch('/minipro1edit',auth,authTeach,cmpn3ctrl.minipro1edit)
router.get('/minipro1all',auth,authTeach,cmpn3ctrl.minipro1all)
router.get('/minipro1stats',auth,authTeach,cmpn3ctrl.minipro1stats)

router.patch('/oopedit',auth,authTeach,cmpn3ctrl.oopedit)
router.get('/oopall',auth,authTeach,cmpn3ctrl.oopall)
router.get('/oopstats',auth,authTeach,cmpn3ctrl.oopstats)

module.exports=router