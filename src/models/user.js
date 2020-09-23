const db = require('../helper/db')

module.exports = {
  postUserModel: (setData) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO user SET ?', setData, (error, result) => {
        if (!error) {
          const outputData = {
            id: result.insertId,
            ...setData
          }
          delete outputData.user_password
          resolve(outputData)
        } else {
          reject(new Error(error))
          console.log(error)
        }
      })
    })
  },
  checkDataUserModel: (email) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT user_id, user_email, user_password, user_name, user_role, user_status 
      FROM user WHERE user_email = ?`, email, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(new Error(error))
          console.log(error)
        }
      })
    })
  }
}
