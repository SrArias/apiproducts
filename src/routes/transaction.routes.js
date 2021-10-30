const express = require('express')
const router = express.Router()
const transactioncontroller = require('../controller/transaction.controller')

router.get('/',transactioncontroller.gettransaction)
router.get('/one',transactioncontroller.getonetransaction)
router.post('/',transactioncontroller.createtransaction)
router.put('/one',transactioncontroller.updatetransaction)
router.delete('/one',transactioncontroller.deletetransaction)

module.exports=router