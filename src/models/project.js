const db = require('../helper/db')
module.exports = {

  getDataProjectModel: (searchKey, searchValue, limit, offset, callBack) => {
    db.query(`SELECT * FROM project_job_seeker WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },

  getDataProjectByIdModel: (id, callBack) => {
    db.query(`SELECT * FROM project WHERE id_project = ${id}`, (err, result, field) => {
      !err ? callBack(result) : callBack(err)
    })
  },

  createDataProjectModel: (data, callBack) => {
    db.query(`INSERT INTO project (name, description, price, duration)
    VALUES('${data[0]}', '${data[1]}', '${data[2]}', '${data[3]}')`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },

  putDataProjectModel: ({ id, data }, callBack) => {
    db.query(`UPDATE project SET name = '${data[0]}', description = '${data[1]}', price = '${data[2]}', duration = '${data[3]}'
    WHERE id_project = ${id}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },

  deleteDataProjectModel: (id, callBack) => {
    db.query(`DELETE FROM project WHERE id_project = ${id}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },

  patchDataProjectModel: ({ id, data }, callBack) => {
    db.query(`UPDATE project SET ${data} WHERE id_project = ${id}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  }
}
