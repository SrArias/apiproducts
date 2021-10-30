const express = require('express')
const router = express.Router()
const categorycontroller = require('../controller/category.controller')

router.get('/',categorycontroller.getcategory)
router.get('/one',categorycontroller.getonecategory)
router.post('/',categorycontroller.createcategory)
router.put('/one',categorycontroller.updatecategory)
router.delete('/one',categorycontroller.deletecategory)

module.exports=router