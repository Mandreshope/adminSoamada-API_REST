const express = require('express')
const router = express.Router()
const teamController = require('../controller/team')

router.post('/create', teamController.create)
router.get('/', teamController.read)
router.put('/update', teamController.update)
router.delete('/delete', teamController.delete)
router.get('/getTeam', teamController.getTeam)
router.get('/getTeamDetails', teamController.getTeamDetails)

module.exports = router