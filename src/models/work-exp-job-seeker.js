const db = require('../helper/db')
module.exports = {
  getWorkExpJobSeekerDataModel: (searchKey, searchValue, limit, offset, callBack) => {
    db.query(`SELECT * FROM work_exp_job_seeker WHERE ${searchKey} LIKE '%${searchValue}%' 
    LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  getWorkExpJobSeekerDataByIdModel: (id, callBack) => {
    db.query(`SELECT * FROM work_exp_job_seeker WHERE id_work_exp = '${id}'`, (err, result, field) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  createWorkExpJobSeekerDataModel: (data, callBack) => {
    db.query(`INSERT INTO work_exp_job_seeker (
      id_profile_job_seeker,
      position,
      company_name,
      start_date,
      end_date,
      description
      ) VALUES ('${data[0]}', '${data[1]}', '${data[2]}', '${data[3]}', '${data[4]}', '${data[5]}')`,
    (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  putWorkExpJobSeekerDataModel: (id, data, callBack) => {
    db.query(`UPDATE work_exp_job_seeker SET 
      id_profile_job_seeker = '${data[0]}',
      position = '${data[1]}', 
      company_name = '${data[2]}', 
      start_date = '${data[3]}',
      end_date = '${data[4]}',
      description = '${data[5]}'
      WHERE id_work_exp = ${id}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  deleteWorkExpJobSeekerDataModel: (id, callBack) => {
    db.query(`DELETE FROM work_exp_job_seeker WHERE id_work_exp = '${id}'`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  patchWorkExpJobSeekerDataModel: (id, data, callBack) => {
    db.query(`UPDATE work_exp_job_seeker SET ${data} WHERE id_work_exp = '${id}'`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  }
}
