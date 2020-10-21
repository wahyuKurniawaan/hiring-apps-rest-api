/* eslint-disable camelcase */
const db = require('../helper/db')
module.exports = {

  getDataProjectModel: (searchKey, searchValue, limit, offset, callBack) => {
    db.query(`SELECT * FROM project_job_seeker WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },

  getDataProjectByIdModel: (id, callBack) => {
    db.query(`SELECT * FROM project_job_seeker WHERE id_project = ${id}`, (err, result, field) => {
      !err ? callBack(result) : callBack(err)
    })
  },

  createDataProjectModel: (data, project_image, callBack) => {
    db.query(`INSERT INTO project_job_seeker (name, description, price, duration, user_id, project_image)
    VALUES('${data[0]}', '${data[1]}', '${data[2]}', '${data[3]}', ${data[4]}, '${project_image}')`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },

  putDataProjectModel: (id, data, project_image, callBack) => {
    db.query(`UPDATE project_job_seeker SET
    name = '${data[0]}',
    description = '${data[1]}',
    price = '${data[2]}',
    duration = '${data[3]}',
    project_image = '${project_image}'
    WHERE id_project = ${id}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },

  deleteDataProjectModel: (id, callBack) => {
    db.query(`DELETE FROM project_job_seeker WHERE id_project = ${id}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },

  patchDataProjectModel: (id, data, callBack) => {
    db.query(`UPDATE project_job_seeker SET ${data} WHERE id_project = ${id}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  }
}
