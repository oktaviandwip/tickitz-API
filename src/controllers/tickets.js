const controllers = {}
const models = require('../models/bookings')
const tickets = require('../models/tickets')
const response = require('../utils/response')

//Get all the tickets
controllers.get = async (req, res) => {
  try {
    const page = parseInt(Object.values(req.query)[0])
    const data = await models.getData(page)
    return response(res, 200, data)
  } catch (err) {
    return response(res, 500, err.message)
  }
}

//Get the user tickets
controllers.getUser = async (req, res) => {
  try {
    const page = parseInt(Object.values(req.query)[0])
    const data = await models.getData(page, req.params.id)
    return response(res, 200, data)
  } catch (err) {
    return response(res, 500, err.message)
  }
}

//Create a ticket
controllers.create = async (req, res) => {
  try {
    const { rows } = await tickets.createTicket(req.params.id)
    if (rows.length === 1) {
      return response(res, 200, rows)
    }
  } catch (err) {
    return response(res, 500, err.message)
  }
}

//Update a ticket
controllers.update = async (req, res) => {
  try {
    const { rows } = await tickets.updateTicket(req.body, req.params.id)
    if (rows.length === 0) {
      return response(res, 404, "Ticket not Found")
    } else {
      return response(res, 200, rows)
    }
  } catch (err) {
    return response(res, 500, err.message)
  }
}

//Delete a ticket
controllers.delete = async (req, res) => {
  try {
    const { rows } = await tickets.deleteTicket(req.params.id)
    if (rows.length === 0) {
      return response(res, 404, "Ticket not Found")
    } else {
      return response(res, 200, rows)
    }
  } catch (err) {
    return response(res, 500, err.message)
  }
}

module.exports = controllers
