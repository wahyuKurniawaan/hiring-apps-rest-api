const db = require('../helper/db')
module.exports = {
  getOffersDataModel: (searchKey, searchValue, limit, offset, callBack) => {
    db.query(`SELECT * FROM offer 
    INNER JOIN profile_job_seeker ON offer.id_profile_job_seeker=profile_job_seeker.id_profile_job_seeker
    INNER JOIN project_job_seeker ON offer.id_project=project_job_seeker.id_project
    INNER JOIN user ON offer.user_id = user.user_id
    WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  getOffersDataByIdModel: (id, callBack) => {
    db.query(`SELECT * FROM offer 
    INNER JOIN profile_job_seeker ON offer.id_profile_job_seeker=profile_job_seeker.id_profile_job_seeker
    INNER JOIN project_job_seeker ON offer.id_project=project_job_seeker.id_project
    INNER JOIN user ON offer.user_id = user.user_id
    WHERE id_offer = '${id}'`, (err, result, field) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  createOffersDataModel: (data, callBack) => {
    db.query(`INSERT INTO offer (id_profile_job_seeker, id_project, user_id) VALUES ('${data[0]}', '${data[1]}')`,
      (err, result, fields) => {
        !err ? callBack(result) : callBack(err)
      })
  },
  putOffersDataModel: (id, status, callBack) => {
    db.query(`UPDATE offer SET
    status = '${status}',
    WHERE id_offer = ${id}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  deleteOffersDataModel: (id, callBack) => {
    db.query(`DELETE FROM offer WHERE id_offer = '${id}'`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  }
}
