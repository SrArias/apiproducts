const express = require('express')
const router = express.Router()
const ingresscontroller = require('../controller/ingress.controller')

router.get('/',ingresscontroller.getingress)
router.get('/one',ingresscontroller.getoningress)
router.post('/',ingresscontroller.createingress)
router.put('/one',ingresscontroller.updateingress)
router.delete('/one',ingresscontroller.deleteingress)

module.exports=router