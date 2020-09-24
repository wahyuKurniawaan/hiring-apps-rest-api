const db = require('../helper/db')
module.exports = {
  getProjectRecruiterDataModel: (searchKey, searchValue, limit, offset, callBack) => {
    db.query(`SELECT * FROM project_recruiter WHERE ${searchKey} LIKE '%${searchValue}%' 
    LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  getProjectRecruiterDataByIdModel: (id, callBack) => {
    db.query(`SELECT * FROM project_recruiter WHERE id_project_recruiter = '${id}'`, (err, result, field) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  createProjectRecruiterDataModel: (data, image, callBack) => {
    db.query(`INSERT INTO project_recruiter (
      project_name,
      project_description,
      project_start_date,
      project_end_date,
      project_image,
      repository_link,  
      id_skill
      ) VALUES ('${data[0]}', '${data[1]}', '${data[2]}', '${data[3]}', ? , '${data[4]}', '${data[5]}')`, image, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  putProjectRecruiterDataModel: (id, data, callBack) => {
    db.query(`UPDATE project_recruiter SET 
    project_name = '${data[0]}',
    project_description = '${data[1]}', 
    project_start_date = '${data[2]}', 
    project_end_date = '${data[3]}',
    project_image = '${data[4]}',
    repository_link = '${data[5]}',
    id_skill = '${data[6]}'
    WHERE id_project_recruiter = ${id}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  deleteProjectRecruiterDataModel: (id, callBack) => {
    db.query(`DELETE FROM project_recruiter WHERE id_project_recruiter = '${id}'`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  patchProjectRecruiterDataModel: (id, data, callBack) => {
    db.query(`UPDATE project_recruiter SET ${data} WHERE id_project_recruiter = '${id}'`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  }
}
