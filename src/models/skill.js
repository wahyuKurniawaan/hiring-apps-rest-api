const db = require('../helper/db')
module.exports = {
  getSkillDataModel: (searchKey, searchValue, limit, offset, callBack) => {
    db.query(`SELECT * FROM skill WHERE ${searchKey} LIKE '%${searchValue}%' 
    LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  getSkillDataByIdModel: (id, callBack) => {
    db.query(`SELECT * FROM skill WHERE id_skill = '${id}'`, (err, result, field) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  createSkillDataModel: (data, callBack) => {
    db.query(`INSERT INTO skill (name_skill) VALUES ('${data}')`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  putSkillDataModel: (id, data, callBack) => {
    db.query(`UPDATE skill SET name_skill = '${data}' WHERE id_skill = ${id}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  deleteSkillDataModel: (id, callBack) => {
    db.query(`DELETE FROM skill WHERE id_skill = '${id}'`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  patchSkillDataModel: (id, data, callBack) => {
    db.query(`UPDATE skill SET ${data} WHERE id_skill = '${id}'`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  }
}
