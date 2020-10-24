/* eslint-disable camelcase */
const db = require('../helper/db')
module.exports = {
  getProfileJobSeekerDataModel: (searchKey, searchValue, limit, offset, callBack) => {
    db.query(`SELECT id_profile_job_seeker, user.user_id, skill, job_title, status_job, address,
    city, workplace, image, description, user_name, user_email, phone_number FROM profile_job_seeker INNER JOIN user
    ON profile_job_seeker.user_id = user.user_id WHERE ${searchKey} LIKE '%${searchValue}%' 
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
  createProfileJobSeekerDataModel: (user_id, callBack) => {
    db.query(`INSERT INTO profile_job_seeker ( user_id, image ) VALUES ('${user_id}')`,
      (err, result, fields) => {
        !err ? callBack(result) : callBack(err)
      })
  },
  putProfileJobSeekerDataModel: (user_id, data, image, callBack) => {
    db.query(`UPDATE profile_job_seeker SET 
    skill = '${data[0]}',
    job_title = '${data[1]}', 
    status_job = '${data[2]}', 
    address = '${data[3]}',
    city = '${data[4]}',
    workplace = '${data[5]}',
    image = '${image}',
    description = '${data[6]}',
    user_name = '${data[7]}',
    user_email = '${data[8]}',
    phone_number = '${data[9]}',
    profile_job_seeker.updated_at =${new Date()},
    user.updated_at =${new Date()},
    WHERE profile_job_seeker.user_id = ${user_id} AND user.user_id = ${user_id}`,
    (err, result, fields) => {
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
