const express = require('express')
const routers = express.Router()
const controllers = require('../controllers/schedules')
const authCheck = require('../middleware/auth')

routers.get('/', authCheck(), controllers.get)
routers.post('/', authCheck('admin'), controllers.add)
routers.put('/:id', authCheck('admin'), controllers.update)
routers.delete('/:id', authCheck('admin'), controllers.delete)

module.exports = routers