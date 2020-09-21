const db = require('../helper/db')
module.exports = {
  getAccountRecruiterDataModel: (searchKey, searchValue, limit, offset, callBack) => {
    db.query(`SELECT * FROM account_recruiter WHERE ${searchKey} LIKE '%${searchValue}%' 
    LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  getAccountRecruiterDataByIdModel: (id, callBack) => {
    db.query(`SELECT * FROM account_recruiter WHERE id_account_recruiter = ${id}`, (err, result, field) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  createAccountRecruiterDataModel: (data, callBack) => {
    db.query(`INSERT INTO account_recruiter (email, full_name, company_name, role_title,
    no_handphone, password, status)
    VALUES('${data[0]}', '${data[1]}', '${data[2]}', '${data[3]}', '${data[4]}', '${data[5]}', '${data[6]}')`,
    (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },

  putAccountRecruiterDataModel: ({ id, data }, callBack) => {
    db.query(`UPDATE account_recruiter SET 
    email = '${data[0]}',
    full_name = '${data[1]}',
    company_name = '${data[2]}',
    role_title = '${data[3]}', 
    no_handphone = '${data[4]}', 
    password = '${data[5]}',
    status = '${data[6]}' 
    WHERE id_account_recruiter = '${id}'`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  deleteAccountRecruiterDataModel: (id, callBack) => {
    db.query(`DELETE FROM account_recruiter WHERE id_account_recruiter = ${id}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  patchAccountRecruiterDataModel: ({ id, data }, callBack) => {
    db.query(`UPDATE account_recruiter SET ${data} WHERE id_account_recruiter = '${id}'`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  }
}
