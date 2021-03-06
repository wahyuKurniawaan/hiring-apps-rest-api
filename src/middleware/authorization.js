const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
  authorizationJobSeeker: (request, response, next) => {
    let token = request.headers.authorization
    if (token) {
      token = token.split(' ')[1]
      jwt.verify(token, process.env.JWT_KEY, (error, result) => {
        if ((error && error.name === 'JsonWebTokenError') || (error && error.name === 'TokenExpiredError')) {
          console.log(error)
          response.send({
            success: false,
            message: error.message
          })
        } else {
          if (result.user_role === 'job seeker' || result.user_role === 'admin') {
            next()
          } else {
            response.send({
              success: false,
              message: 'Access Denied!'
            })
          }
        }
      })
    } else {
      console.log('token = ' + token)
      response.send({
        success: false,
        message: 'Please login First!'
      })
    }
  },
  authorizationRecruiter: (request, response, next) => {
    let token = request.headers.authorization
    if (token) {
      token = token.split(' ')[1]
      jwt.verify(token, process.env.JWT_KEY, (error, result) => {
        if ((error && error.name === 'JsonWebTokenError') || (error && error.name === 'TokenExpiredError')) {
          console.log(error)
          response.send({
            success: false,
            message: error.message
          })
        } else {
          if (result.user_role === 'recruiter' || result.user_role === 'admin') {
            next()
          } else {
            response.send({
              success: false,
              message: 'Access Denied!'
            })
          }
        }
      })
    } else {
      console.log('token = ' + token)
      response.send({
        success: false,
        message: 'Please login First!'
      })
    }
  },
  authorizationAdmin: (request, response, next) => {
    let token = request.headers.authorization
    if (token) {
      token = token.split(' ')[1]
      jwt.verify(token, process.env.JWT_KEY, (error, result) => {
        if ((error && error.name === 'JsonWebTokenError') || (error && error.name === 'TokenExpiredError')) {
          console.log(error)
          response.send({
            success: false,
            message: error.message
          })
        } else {
          if (result.user_role === 'admin') {
            next()
          } else {
            response.send({
              success: false,
              message: 'Access Denied!'
            })
          }
        }
      })
    } else {
      console.log('token = ' + token)
      response.send({
        success: false,
        message: 'Please login First!'
      })
    }
  }
}
