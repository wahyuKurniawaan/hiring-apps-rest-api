const db = require('../helper/db')
module.exports = {
  getProfileJobSeekerDataModel: (searchKey, searchValue, limit, offset, callBack) => {
    db.query(`SELECT * FROM profile_job_seeker WHERE ${searchKey} LIKE '%${searchValue}%' 
    LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      console.log(`error = ${err}`)
      console.log(`result = ${result}`)
      !err ? callBack(result) : callBack(err)
    })
  },
  getProfileJobSeekerDataByIdModel: (id, callBack) => {
    db.query(`SELECT * FROM profile_job_seeker WHERE id_profile_job_seeker = '${id}'`, (err, result, field) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  createProfileJobSeekerDataModel: (data, image, callBack) => {
    db.query(`INSERT INTO profile_job_seeker (
      id_account_job_seeker,
      id_portofolio_job_seeker,
      id_skill,
      email,
      full_name,
      job_title,
      status_job,
      address,
      city,
      workplace,
      image,
      description
      ) VALUES ('${data[0]}', '${data[1]}', '${data[2]}', '${data[3]}', '${data[4]}', '${data[5]}', '${data[6]}',
      '${data[7]}', '${data[8]}', '${data[9]}', ? , '${data[10]}')`, image, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  putProfileJobSeekerDataModel: (id, data, image, callBack) => {
    db.query(`UPDATE profile_job_seeker SET 
    id_account_job_seeker = '${data[0]}',
    id_portofolio_job_seeker = '${data[1]}', 
    id_skill = '${data[2]}', 
    email = '${data[3]}',
    full_name = '${data[4]}',
    job_title = '${data[5]}',
    status_job = '${data[6]}',
    address = '${data[7]}',
    city = '${data[8]}',
    workplace = '${data[9]}',
    image = '${image}',
    description = '${data[10]}',
    updated_at = ?
    WHERE id_profile_job_seeker = ${id}`, new Date(), (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  deleteProfileJobSeekerDataModel: (id, callBack) => {
    db.query(`DELETE FROM profile_job_seeker WHERE id_profile_job_seeker = '${id}'`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  patchProfileJobSeekerDataModel: (id, data, callBack) => {
    db.query(`UPDATE profile_job_seeker SET ${data} WHERE id_profile_job_seeker = '${id}'`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  }
}
