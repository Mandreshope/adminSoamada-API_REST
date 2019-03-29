const express = require('express')
const router = express.Router()
const CustomerController = require('../controller/customer')

router.post('/create', CustomerController.create)
router.get('/', CustomerController.read)
router.put('/update', CustomerController.update)
router.delete('/delete', CustomerController.delete)
router.get('/getCustomer', CustomerController.getCustomer)

module.exports = router