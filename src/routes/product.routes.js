const express = require('express')
const router = express.Router()
const productcontroller = require('../controller/product.controller')

router.get('/',productcontroller.getproduct)
router.get('/one',productcontroller.getoneproduct)
router.post('/',productcontroller.createproduct)
router.put('/one',productcontroller.updateproduct)
router.delete('/one',productcontroller.deleteproduct)

module.exports=router