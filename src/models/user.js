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
  },
  checkUserEmailModel: (email) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT user_email FROM user WHERE user_email = ?', email, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(new Error(error))
          console.log(error)
        }
      })
    })
  },
  getUserDataModel: (searchKey, searchValue, limit, offset, callBack) => {
    db.query(`SELECT * FROM user WHERE ${searchKey} LIKE '%${searchValue}%' 
    LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  getUserDataByIdModel: (id, callBack) => {
    db.query(`SELECT * FROM user WHERE user_id = '${id}'`, (err, result, field) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  putUserDataModel: (id, data, callBack) => {
    db.query(`UPDATE user SET 
    user_name = '${data[0]}',
    user_email = '${data[1]}',
    user_password = '${data[2]}',
    user_role = '${data[3]}',
    user_status = '${data[4]}',
    updated_at = '${data[5]}'
    WHERE user_id = ${id}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  deleteUserDataModel: (id, callBack) => {
    db.query(`DELETE FROM user WHERE user_id = '${id}'`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  }
}
