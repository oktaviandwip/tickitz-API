const controllers = {}
const models = require('../models/schedules')
const response = require('../utils/response')

//Get all the schedules
controllers.get = async (req, res) => {
  try {
      const page = parseInt(Object.values(req.query)[0])
      const data = await models.getData(page)
      return response(res, 200, data)
    } catch (err) {
      return response(res, 500, err.message)
    }
}

//Add a schedule
controllers.add = async (req, res) => {
  try {
    const { rows } = await models.addData(req.body)
    if (rows.length === 1) {
      return response(res, 200, rows)
    }
  } catch (err) {
    return response(res, 500, err.message)
  }
}

//Update a schedule
controllers.update = async (req, res) => {
  try {
    const { rows } = await models.updateData(req.body, req.params.id)
    if (rows.length === 0) {
      return response(res, 404, "Schedule not Found")
    } else {
      return response(res, 200, rows)
    }
  } catch (err) {
    return response(res, 500, err.message)
  }
}

//Delete a schedule
controllers.delete = async (req, res) => {
  try {
    const { rows } = await models.deleteData(req.params.id)
    if (rows.length === 0) {
      return response(res, 404, "Schedule not Found")
    } else {
      return response(res, 200, rows)
    }
  } catch (err) {
    return response(res, 500, err.message)
  }
}

module.exports = controllers
