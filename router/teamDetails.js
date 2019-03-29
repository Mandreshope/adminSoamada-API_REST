const express = require('express')
const router = express.Router()
const teamDetailsController = require('../controller/teamDetails')

router.post('/create', teamDetailsController.create)
router.get('/', teamDetailsController.read)
router.put('/update', teamDetailsController.update)
router.delete('/delete', teamDetailsController.delete)
router.get('/getTeamDetail', teamDetailsController.getTeamDetail)
router.delete('/drop', teamDetailsController.drop)

module.exports = router