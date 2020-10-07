const db = require('../helper/db')
module.exports = {
  getProfileRecruiterDataModel: (searchKey, searchValue, limit, offset, callBack) => {
    db.query(`SELECT id_profile_recruiter, profile_recruiter.user_id, user.user_name, user.user_email, user.user_company,
    user.role_job, user.phone_number, user.user_role, profile_image, company_field, city, description,
    instagram, linkedin
    FROM profile_recruiter INNER JOIN user ON profile_recruiter.user_id=user.user_id
    WHERE ${searchKey} LIKE '%${searchValue}%' LIMIT ${limit} OFFSET ${offset}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  getProfileRecruiterDataByIdModel: (id, callBack) => {
    db.query(`SELECT * FROM profile_recruiter WHERE id_profile_recruiter = '${id}'`, (err, result, field) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  createProfileRecruiterDataModel: (data, callBack) => {
    db.query(`INSERT INTO profile_recruiter (
      id_account_recruiter,
      email,
      full_name,
      job_title,
      linkedin,
      company_name,  
      company_field,
      company_address,
      city,
      description,
      company_website,
      company_phone_number
      ) VALUES ('${data[0]}', '${data[1]}', '${data[2]}', '${data[3]}', '${data[4]}', '${data[5]}', '${data[6]}',
      '${data[7]}', '${data[8]}', '${data[9]}', '${data[10]}', '${data[11]}')`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  putProfileRecruiterDataModel: (id, data, callBack) => {
    db.query(`UPDATE profile_recruiter SET 
    id_account_recruiter = '${data[0]}',
    email = '${data[1]}', 
    full_name = '${data[2]}', 
    job_title = '${data[3]}',
    linkedin = '${data[4]}',
    company_name = '${data[5]}',
    company_field = '${data[6]}',
    company_address = '${data[7]}',
    city = '${data[8]}',
    description = '${data[9]}',
    company_website = '${data[10]}',
    company_phone_number = '${data[11]}'
    WHERE id_profile_recruiter = ${id}`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  deleteProfileRecruiterDataModel: (id, callBack) => {
    db.query(`DELETE FROM profile_recruiter WHERE id_profile_recruiter = '${id}'`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  patchProfileRecruiterDataModel: (id, data, callBack) => {
    db.query(`UPDATE profile_recruiter SET ${data} WHERE id_profile_recruiter = '${id}'`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  }
}
