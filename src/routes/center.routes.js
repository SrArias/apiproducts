const express = require('express')
const router = express.Router()
const centercontroller = require('../controller/center.controller')

router.get('/',centercontroller.getcenter)
router.get('/one',centercontroller.getonecenter)
router.post('/',centercontroller.createcenter)
router.put('/one',centercontroller.updatecenter)
router.delete('/one',centercontroller.deletecenter)

module.exports=router