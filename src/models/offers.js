const db = require('../helper/db')
module.exports = {
  getOffersDataModel: (searchKey, searchValue, limit, offset, callBack) => {
    db.query(`SELECT * FROM offer 
    INNER JOIN profile_job_seeker ON offer.id_profile_job_seeker=profile_job_seeker.id_profile_job_seeker
    INNER JOIN project_job_seeker ON offer.id_project=project_job_seeker.id_project
    WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  getOffersDataByIdModel: (id, callBack) => {
    db.query(`SELECT * FROM offer 
    INNER JOIN profile_job_seeker ON offer.id_profile_job_seeker=profile_job_seeker.id_profile_job_seeker
    INNER JOIN project_job_seeker ON offer.id_project=project_job_seeker.id_project
    WHERE id_offer = '${id}'`, (err, result, field) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  createOffersDataModel: (data, callBack) => {
    db.query(`INSERT INTO offer (id_profile_job_seeker, id_project) VALUES ('${data[0]}', '${data[1]}')`,
      (err, result, fields) => {
        !err ? callBack(result) : callBack(err)
      })
  },
  putOffersDataModel: (id, data, callBack) => {
    db.query(`UPDATE skill SET
    id_profile_job_seeker = '${data[0]}',
    id_project = '${data[1]}' WHERE id_offer = ${id}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  deleteOffersDataModel: (id, callBack) => {
    db.query(`DELETE FROM offer WHERE id_offer = '${id}'`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  }
}
