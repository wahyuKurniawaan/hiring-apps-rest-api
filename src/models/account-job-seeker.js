const db = require('../helper/db')
module.exports = {
  getAccountJobSeekerDataModel: (searchKey, searchValue, limit, offset, callBack) => {
    db.query(`SELECT * FROM account_job_seeker WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },

  getAccountJobSeekerDataByIdModel: (id, callBack) => {
    db.query(`SELECT * FROM account_job_seeker WHERE id_account_job_seeker = '${id}'`, (err, result, field) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  createAccountJobSeekerDataModel: (data, callBack) => {
    db.query(`INSERT INTO account_job_seeker (email, full_name, no_handphone, password, status)
    VALUES('${data[0]}', '${data[1]}', '${data[2]}', '${data[3]}', '${data[4]}')`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  putAccountJobSeekerDataModel: (id, data, callBack) => {
    db.query(`UPDATE account_job_seeker SET 
    email = '${data[0]}',
    full_name = '${data[1]}', 
    no_handphone = '${data[2]}', 
    password = '${data[3]}',
    status = '${data[4]}' 
    WHERE id_account_job_seeker = ${id}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  deleteAccountJobSeekerDataModel: (id, callBack) => {
    db.query(`DELETE FROM account_job_seeker WHERE id_account_job_seeker = '${id}'`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },

  patchAccountJobSeekerDataModel: (id, data, callBack) => {
    db.query(`UPDATE account_job_seeker SET ${data} WHERE id_account_job_seeker = '${id}'`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  }
}
