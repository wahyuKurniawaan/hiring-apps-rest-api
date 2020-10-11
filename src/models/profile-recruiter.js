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
    db.query(`SELECT id_profile_recruiter, profile_recruiter.user_id, user.user_name, user.user_email, user.user_company,
    user.role_job, user.phone_number, user.user_role, profile_image, company_field, city, description,
    instagram, linkedin
    FROM profile_recruiter INNER JOIN user ON profile_recruiter.user_id=user.user_id
    WHERE profile_recruiter.user_id = '${id}'`, (err, result, field) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  createProfileRecruiterDataModel: (userId, callBack) => {
    db.query(`INSERT INTO profile_recruiter (user_id) VALUES ('${userId}')`, (err, result, fields) => {
      !err ? callBack(result) : callBack(err)
    })
  },
  putProfileRecruiterDataModel: (userId, image, data, callBack) => {
    db.query(`UPDATE profile_recruiter, user SET 
    profile_image = '${image}',
    company_field = '${data[0]}', 
    city = '${data[1]}', 
    description = '${data[2]}',
    instagram = '${data[3]}',
    linkedin = '${data[4]}',
    user_name = '${data[5]}',
    user_email = '${data[6]}',
    user_password = '${data[7]}',
    user_company = '${data[8]}',
    role_job = '${data[9]}',
    phone_number = '${data[10]}'
    WHERE profile_recruiter.user_id = ${userId} AND user.user_id = ${userId}`
    , (err, result, fields) => {
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
