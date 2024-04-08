function response(res, status, data) {
  let description = ''

  switch (status) {
    case 200:
      description = 'OK'
      break
    case 201:
      description = 'Created'
      break
    case 304:
      description = 'Not Modified'
      break
    case 400:
      description = 'Bad Request'
      break
    case 401:
      description = 'Unauthorized'
      break
    case 404:
      description = 'Not Found'
      break
    case 500:
      description = 'Internal Server Error'
      break
    case 501:
      description = 'Bad Gateway'
      break
    default:
      description = ''
  }

  let result = {
    status,
    description
  }

  if (status >= 500) {
    result.error = data
  } else if (status >= 400 || typeof data === 'string') {
    result.message = data
  } else if (Array.isArray(data)) {
    result.data = data
  } else {
    result = {
      ...result,
      ...data
    }
  }
  res.status(status).json(result)
}

module.exports = response