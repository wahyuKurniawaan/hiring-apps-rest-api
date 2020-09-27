/* eslint-disable camelcase */
require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {
  postUserModel,
  checkDataUserModel,
  checkUserEmailModel,
  putUserDataModel,
  getUserDataModel,
  getUserDataByIdModel,
  deleteUserDataModel
} = require('../models/user')
module.exports = {
  registerUser: async (request, response) => {
    const {
      user_name,
      user_email,
      user_password,
      user_role
    } = request.body
    const salt = bcrypt.genSaltSync()
    const encryptPassword = bcrypt.hashSync(user_password.trim(), salt)
    const checkEmail = await checkUserEmailModel(user_email)
    const setData = {
      user_name,
      user_email,
      user_password: typeof (user_password) === 'undefined' ? '' : encryptPassword,
      user_role,
      user_status: 'not active', // hint = 'not active'   2. 'activated'
      created_at: new Date()
    }
    try {
      if (user_name && user_email && user_password && user_role) {
        if (user_password.length >= 6) {
          if (checkEmail.length > 0) {
            response.send({
              success: false,
              message: 'Email has been registered!'
            })
          } else {
            if (user_role === 'recruiter' || user_role === 'job seeker' || user_role === 'admin') {
              const result = await postUserModel(setData)
              response.send({
                success: true,
                message: 'Success Register User!',
                data: result
              })
            } else {
              response.send({
                success: false,
                message: 'User role must contain one of this value = recruiter, job seeker, admin'
              })
            }
          }
        } else {
          response.send({
            success: false,
            message: 'Password must containt at least 6 characters!'
          })
        }
      } else {
        response.send({
          success: false,
          message: 'All field must be filled!'
        })
      }
    } catch (error) {
      response.send({
        success: false,
        message: 'Bad request!',
        print: console.log('Error = ' + error)
      })
    }
  },
  loginUser: async (request, response) => {
    try {
      const { user_email, user_password } = request.body
      const checkDataUser = await checkDataUserModel(user_email)
      console.log(checkDataUser)
      if (user_email.trim() && user_password.trim()) {
        if (checkDataUser.length > 0) {
          const checkPassword = bcrypt.compareSync(user_password, checkDataUser[0].user_password)
          if (checkPassword) {
            const { user_id, user_name, user_email, user_role, user_status } = checkDataUser[0]
            let payload = {
              user_id,
              user_name,
              user_email,
              user_role,
              user_status // hint = 'not active'   2. 'activated'
            }
            const tokenLogin = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1h' })
            payload = { ...payload, tokenLogin }
            response.send({
              success: true,
              message: `successfully logged in as a ${user_role} !`,
              data: payload
            })
            console.log('Berhasil Login!')
          } else {
            response.send({
              success: false,
              message: 'Incorrect password!'
            })
          }
        } else {
          response.send({
            success: false,
            message: 'Email is not registered!'
          })
        }
      } else {
        response.send({
          success: false,
          message: 'All field must be filled!'
        })
      }
    } catch (error) {
      console.log(error)
      response.send({
        success: false,
        message: 'Bad request!'
      })
    }
  },
  getDataUser: (request, response) => {
    let { search, page, limit } = request.query
    let searchKey = ''
    let searchValue = ''
    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.values(search)[0]
    } else {
      searchKey = 'user_name'
      searchValue = search || ''
    }
    !limit ? limit = 20 : limit = parseInt(limit)
    !page ? page = 1 : page = parseInt(page)
    const offset = (page - 1) * limit
    getUserDataModel(searchKey, searchValue, limit, offset, result => {
      if (result.length) {
        response.send({
          success: true,
          message: 'List Users',
          data: result
        })
      } else {
        console.log(result)
        response.send({
          success: false,
          message: 'there is no item on list'
        })
      }
    })
  },
  getUserDataById: (req, res) => {
    const { id } = req.params
    getUserDataByIdModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data user with id = ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: true,
          message: `Data user with id = ${id} was not found!`
        })
      }
    })
  },
  putUserData: (req, res) => {
    const {
      user_name,
      user_email,
      user_password,
      user_role,
      user_status
    } = req.body
    const salt = bcrypt.genSaltSync()
    const encryptPassword = bcrypt.hashSync(user_password.trim(), salt)
    const id = req.params.id
    if (user_name.trim() && user_email.trim() && user_password.trim() && user_role.trim() &&
    user_status.trim()) {
      getUserDataByIdModel(id, result => {
        if (result.length) {
          const setDate = new Date().toISOString().slice(0, 19).replace('T', ' ')
          putUserDataModel(id, [user_name, user_email, encryptPassword, user_role, user_status, setDate],
            result => {
              if (result.affectedRows) {
                res.send({
                  success: true,
                  message: `user with id ${id} has been updated`
                })
              } else {
                console.log(result)
                res.send({
                  success: false,
                  message: 'failed to update data'
                })
              }
            })
        } else {
          res.send({
            success: false,
            message: `user with id ${id} is not found!`
          })
        }
      })
    } else {
      res.send({
        success: false,
        message: 'All field must be filled!'
      })
    }
  },
  deleteUserData: (req, res) => {
    const { id } = req.params
    getUserDataByIdModel(id, result => {
      if (result.length) {
        deleteUserDataModel(id, result => {
          if (result.affectedRows) {
            res.send({
              success: true,
              message: `Item profile with id = ${id} has been deleted`
            })
          } else {
            res.send({
              success: false,
              message: 'Failed to delete'
            })
          }
        })
      } else {
        res.send({
          success: false,
          message: 'Data profile was not found!'
        })
      }
    })
  }
}
