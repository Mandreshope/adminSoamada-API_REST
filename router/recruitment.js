const express = require('express')
const router = express.Router()
const RecruitmentController = require('../controller/recruitment')

router.post('/create', RecruitmentController.create)
router.get('/', RecruitmentController.read)
router.put('/update', RecruitmentController.update)
router.delete('/delete', RecruitmentController.delete)
router.get('/getRecruitment', RecruitmentController.getRecruitment)
router.get('/getRecruitmentDetails', RecruitmentController.getRecruitmentDetails)

module.exports = router