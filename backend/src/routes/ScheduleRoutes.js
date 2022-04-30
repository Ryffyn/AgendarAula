const express = require('express')
const ScheduleController = require('../controllers/ScheduleController')
const auth = require('../middlewares/auth')

const router = express.Router()

router.get('/',  ScheduleController.get)

router.get('/:id', ScheduleController.getOne)

router.post('/', ScheduleController.post)

router.delete('/:id', ScheduleController.delete)


module.exports = router

