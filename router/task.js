const express = require('express')
const router = express.Router()
const taskController = require('../controller/task')

router.post('/create', taskController.create)
router.get('/', taskController.read)
router.put('/update', taskController.update)
router.delete('/delete', taskController.delete)
router.get('/getTask', taskController.getTask)
router.get('/getDetailsTask', taskController.getDetailsTask)


module.exports = router