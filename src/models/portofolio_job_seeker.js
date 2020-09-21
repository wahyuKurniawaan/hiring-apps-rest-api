const db = require('../helper/db')
module.exports = {
  getPortofolioJobSeekerDataModel: (searchKey, searchValue, limit, offset, callBack) => {
    db.query(`SELECT * FROM portofolio_job_seeker WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  getPortofolioJobSeekerDataByIdModel: (id, callBack) => {
    db.query(`SELECT * FROM portofolio_job_seeker WHERE id_portofolio = '${id}'`, (err, result, field) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  createPortofolioJobSeekerDataModel: (data, callBack) => {
    db.query(`INSERT INTO portofolio_job_seeker (application_name, description, publication_link, repository_link, workplace, type, portofolio_image)
    VALUES ('${data[0]}', '${data[1]}', '${data[2]}', '${data[3]}', '${data[4]}', '${data[5]}', '${data[6]}')`,
    (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  putPortofolioJobSeekerDataModel: (id, data, callBack) => {
    db.query(`UPDATE portofolio_job_seeker SET 
    application_name = '${data[0]}',
    description = '${data[1]}', 
    publication_link = '${data[2]}', 
    repository_link = '${data[3]}',
    workplace = '${data[4]}',
    type = '${data[5]}',
    portofolio_image = '${data[6]}' 
    WHERE id_portofolio = ${id}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  deletePortofolioJobSeekerDataModel: (id, callBack) => {
    db.query(`DELETE FROM portofolio_job_seeker WHERE id_portofolio = '${id}'`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  patchPortofolioJobSeekerDataModel: (id, data, callBack) => {
    db.query(`UPDATE portofolio_job_seeker SET ${data} WHERE id_portofolio = '${id}'`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  }
}
