const express = require('express')
const router = express.Router()
const notificationController = require('../controller/notification')

router.post('/create', notificationController.create)
router.put('/update', notificationController.update)
router.delete('/delete', notificationController.delete)
router.get('/', notificationController.read)
router.get('/getNotification', notificationController.getNotification)

module.exports = router