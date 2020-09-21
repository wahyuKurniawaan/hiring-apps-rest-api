const db = require('../helper/db')
module.exports = {
  getProfileJobSeekerDataModel: (searchKey, searchValue, limit, offset, callBack) => {
    db.query(`SELECT * FROM profile_job_seeker WHERE ${searchKey} LIKE '%${searchValue}%' 
    LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  getProfileJobSeekerDataByIdModel: (id, callBack) => {
    db.query(`SELECT * FROM profile_job_seeker WHERE id_profile_job_seeker = '${id}'`, (err, result, field) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  getProfileJobSeekerDataByNameModel: (name, callBack) => {
    db.query(`SELECT * FROM profile_job_seeker WHERE full_name LIKE '%${name}%'`, (err, result, field) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  getProfileJobSeekerDataByCityModel: (city, callBack) => {
    db.query(`SELECT * FROM profile_job_seeker WHERE city LIKE '%${city}%'`, (err, result, field) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  getProfileJobSeekerDataBySkillModel: (id, callBack) => {
    db.query(`SELECT * FROM profile_job_seeker WHERE id_skill = '${id}'`, (err, result, field) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  createProfileJobSeekerDataModel: (data, callBack) => {
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
      '${data[7]}', '${data[8]}', '${data[9]}', '${data[10]}', '${data[11]}')`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  putProfileJobSeekerDataModel: (id, data, callBack) => {
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
    image = '${data[10]}',
    description = '${data[11]}'
    WHERE id_profile_job_seeker = ${id}`, (err, result, fields) => {
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
