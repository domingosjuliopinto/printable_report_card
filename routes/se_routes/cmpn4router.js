const router = require('express').Router()
const cmpn4ctrl = require('../../controllers/se_controllers/cmpn4ctrl')
const auth = require('../../middleware/auth')
const authTeach = require('../../middleware/authTeach')

router.get('/sem4show',auth,cmpn4ctrl.sem4show)
router.get('/studentall4',auth,cmpn4ctrl.studentall4)

router.patch('/am4edit',auth,authTeach,cmpn4ctrl.am4edit)
router.get('/am4all',auth,authTeach,cmpn4ctrl.am4all)
router.get('/am4stats',auth,authTeach,cmpn4ctrl.am4stats)

router.patch('/micropedit',auth,authTeach,cmpn4ctrl.micropedit)
router.get('/micropall',auth,authTeach,cmpn4ctrl.micropall)
router.get('/micropstats',auth,authTeach,cmpn4ctrl.micropstats)

router.patch('/osedit',auth,authTeach,cmpn4ctrl.osedit)
router.get('/osall',auth,authTeach,cmpn4ctrl.osall)
router.get('/osstats',auth,authTeach,cmpn4ctrl.osstats)

router.patch('/aoaedit',auth,authTeach,cmpn4ctrl.aoaedit)
router.get('/aoaall',auth,authTeach,cmpn4ctrl.aoaall)
router.get('/aoastats',auth,authTeach,cmpn4ctrl.aoastats)

router.patch('/dbmsedit',auth,authTeach,cmpn4ctrl.dbmsedit)
router.get('/dbmsall',auth,authTeach,cmpn4ctrl.dbmsall)
router.get('/dbmsstats',auth,authTeach,cmpn4ctrl.dbmsstats)

router.patch('/minipro2edit',auth,authTeach,cmpn4ctrl.minipro2edit)
router.get('/minipro2all',auth,authTeach,cmpn4ctrl.minipro2all)
router.get('/minipro2stats',auth,authTeach,cmpn4ctrl.minipro2stats)

router.patch('/ppedit',auth,authTeach,cmpn4ctrl.ppedit)
router.get('/ppall',auth,authTeach,cmpn4ctrl.ppall)
router.get('/ppstats',auth,authTeach,cmpn4ctrl.ppstats)

module.exports=router