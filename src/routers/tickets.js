const express = require('express')
const routers = express.Router()
const controllers = require('../controllers/tickets')
const authCheck = require('../middleware/auth')

routers.get('/:id', authCheck(), controllers.getUser)
routers.get('/', authCheck('admin'), controllers.get)
routers.post('/:id', authCheck('admin'), controllers.create)
routers.put('/:id', authCheck('admin'), controllers.update)
routers.delete('/:id', authCheck('admin'), controllers.delete)

module.exports = routers