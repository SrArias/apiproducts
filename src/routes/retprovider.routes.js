const express = require('express')
const router = express.Router()
const retprovidercontroller = require('../controller/retprovider.controller')

router.get('/',retprovidercontroller.getretprovider)
router.get('/one',retprovidercontroller.getoneretprovider)
router.post('/',retprovidercontroller.createretprovider)
router.put('/one',retprovidercontroller.updateretprovider)
router.delete('/one',retprovidercontroller.deleteretprovider)

module.exports=router