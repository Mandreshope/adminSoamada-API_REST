const express = require('express')
const router = express.Router()
const ContractController = require('../controller/contract')

router.post('/create', ContractController.create)
router.get('/', ContractController.read)
router.put('/update', ContractController.update)
router.delete('/delete', ContractController.delete)
router.get('/getContract', ContractController.getContract)
router.get('/getContractDetails', ContractController.getContractDetails)

module.exports = router