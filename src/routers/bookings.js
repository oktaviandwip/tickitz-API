const express = require('express')
const routers = express.Router()
const controllers = require('../controllers/bookings')
const authCheck = require('../middleware/auth')

routers.get('/', authCheck('admin'), controllers.get)
routers.post('/', authCheck(), controllers.add)
routers.put('/:id', authCheck(), controllers.update)
routers.delete('/:id', authCheck(), controllers.delete)

module.exports = routers