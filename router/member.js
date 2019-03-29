const express = require('express')
const router = express.Router()
const memberController = require('../controller/member')

router.post('/create', memberController.create)
router.put('/update', memberController.update)
router.delete('/delete', memberController.delete)
router.get('/', memberController.read)
router.post('/auth', memberController.auth)
router.get('/getMember', memberController.getMember)

module.exports = router