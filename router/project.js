const express =  require('express')
const router = express.Router()
const projectController = require('../controller/project')

router.post('/create', projectController.create)
router.get('/', projectController.read)
router.put('/update', projectController.update)
router.delete('/delete', projectController.delete)
router.get('/getProject', projectController.getProject)
router.get('/getProjectDetails', projectController.getProjectDetails)


module.exports = router