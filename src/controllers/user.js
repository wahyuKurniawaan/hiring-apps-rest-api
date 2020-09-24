/* eslint-disable camelcase */
require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {
  postUserModel,
  checkDataUserModel
} = require('../models/user')
module.exports = {
  registerUser: async (request, response) => {
    const {
      user_name,
      user_email,
      user_password
    } = request.body

    const salt = bcrypt.genSaltSync()
    const encryptPassword = bcrypt.hashSync(user_password, salt)

    const setData = {
      user_name,
      user_email,
      user_password: encryptPassword,
      user_role: 1, // hint = 1. job seeker   2. recruiter
      user_status: 0, // hint = 0. non aktif   2. aktif
      created_at: new Date()
    }
    try {
      // tugas = cek pengkodisian email, apakah sudah terdaftar sebelumnya?
      const result = await postUserModel(setData)
      response.send({
        success: true,
        message: 'Success Register User!',
        data: result
      })
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
      // PR = belum di buat error handling null
      if (checkDataUser.length > 0) {
        const checkPassword = bcrypt.compareSync(user_password, checkDataUser[0].user_password)
        if (checkPassword) {
          const { user_id, user_name, user_email, user_role, user_status } = checkDataUser[0]
          let payload = {
            user_id,
            user_name,
            user_email,
            user_role,
            user_status
          }
          const tokenLogin = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1h' })
          payload = { ...payload, tokenLogin }
          response.send({
            success: true,
            message: 'Login success!',
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
    } catch (error) {
      console.log('Error = ' + error)
      response.send({
        success: false,
        message: 'Bad request!'
      })
    }
  }
}
