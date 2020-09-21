const {
  getProfileRecruiterDataModel,
  createProfileRecruiterDataModel,
  putProfileRecruiterDataModel,
  deleteProfileRecruiterDataModel,
  patchProfileRecruiterDataModel,
  getProfileRecruiterDataByIdModel
} = require('../models/profile-recruiter')

module.exports = {
  getProfileRecruiterData: (req, res) => {
    let { search, page, limit } = req.query
    let searchKey = ''
    let searchValue = ''
    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.keys(search)[0]
    } else {
      searchKey = 'email'
      searchValue = search || ''
    }
    !limit ? limit = 20 : limit = parseInt(limit)
    !page ? page = 1 : page = parseInt(page)
    const offset = (page - 1) * limit
    getProfileRecruiterDataModel(searchKey, searchValue, limit, offset, result => {
      if (result.length) {
        res.send({
          success: true,
          message: 'list profile recruiter',
          data: result
        })
      } else {
        console.log(result)
        res.send({
          success: false,
          message: 'there is no item on list'
        })
      }
    })
  },
  getProfileRecruiterDataById: (req, res) => {
    const { id } = req.params
    getProfileRecruiterDataByIdModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data profile recruiter with id = ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: true,
          message: `Data profile recruiter with id = ${id} was not found!`
        })
      }
    })
  },
  createProfileRecruiterData: (req, res) => {
    const {
      idAccount,
      email,
      fullName,
      jobTitle,
      linkedin,
      companyName,
      companyField,
      companyAddress,
      city,
      description,
      companyWebsite,
      companyPhoneNumber
    } = req.body
    if (email && fullName && jobTitle && companyName && city && companyField && companyAddress) {
      createProfileRecruiterDataModel([
        idAccount,
        email,
        fullName,
        jobTitle,
        linkedin,
        companyName,
        companyField,
        companyAddress,
        city,
        description,
        companyWebsite,
        companyPhoneNumber
      ], result => {
        console.log(result)
        res.send({
          success: true,
          message: 'profile has been created',
          data: console.log(req.body)
        })
      })
    } else {
      res.send({
        success: false,
        message: 'all field must be filled!'
      })
    }
  },
  putProfileRecruiterData: (req, res) => {
    const {
      idAccount,
      email,
      fullName,
      jobTitle,
      linkedin,
      companyName,
      companyField,
      companyAddress,
      city,
      description,
      companyWebsite,
      companyPhoneNumber
    } = req.body
    const id = req.params.id
    console.log(req.params)
    if (email.trim() && fullName.trim() && jobTitle.trim() && companyName.trim() && city.trim() &&
    description.trim() && companyWebsite.trim()) {
      getProfileRecruiterDataByIdModel(id, result => {
        if (result.length) {
          putProfileRecruiterDataModel(id, [
            idAccount,
            email,
            fullName,
            jobTitle,
            linkedin,
            companyName,
            companyField,
            companyAddress,
            city,
            description,
            companyWebsite,
            companyPhoneNumber
          ], result => {
            if (result.affectedRows) {
              res.send({
                success: true,
                message: `profile with id ${id} has been updated`
              })
            } else {
              res.send({
                success: false,
                message: 'failed to update data'
              })
            }
          })
        } else {
          res.send({
            success: false,
            message: `profile with id ${id} is not found!`
          })
        }
      })
    } else {
      res.send({
        success: false,
        message: 'All field must be filled!'
      })
    }
  },
  deleteProfileRecruiterData: (req, res) => {
    const { id } = req.params
    getProfileRecruiterDataByIdModel(id, result => {
      if (result.length) {
        deleteProfileRecruiterDataModel(id, result => {
          if (result.affectedRows) {
            res.send({
              success: true,
              message: `Item profile with id = ${id} has been deleted`
            })
          } else {
            res.send({
              success: false,
              message: 'Failed to delete'
            })
          }
        })
      } else {
        res.send({
          success: false,
          message: 'Data account was not found!'
        })
      }
    })
  },
  patchProfileRecruiterData: (req, res) => {
    const { id } = req.params
    const {
      id_account_job_seeker = '',
      email = '',
      full_name = '',
      job_title = '',
      linkedin = '',
      company_name = '',
      company_field = '',
      company_address = '',
      city = '',
      description = '',
      company_website = '',
      company_phone_number = ''
    } = req.body
    if (id_account_job_seeker.trim() || email.trim() || email.trim() || full_name.trim() || job_title.trim() ||
    linkedin.trim() || company_name.trim() || company_field.trim() || company_address.trim() || city.trim() ||
    description.trim() || company_website.trim() || company_phone_number.trim()) {
      getProfileRecruiterDataByIdModel(id, result => {
        if (result.length) {
          const data = Object.entries(req.body).map(item => {
            return parseInt(item[1]) > 0 ? `${item[0]} = ${item[1]}` : `${item[0]} = '${item[1]}'`
          })
          console.log(data)
          patchProfileRecruiterDataModel(id, data, result => {
            console.log(result)
            if (result.affectedRows) {
              res.send({
                success: true,
                message: `profile with id = ${id} has been updated`
              })
            } else {
              res.send({
                success: false,
                message: 'failed to update data'
              })
            }
          })
        } else {
          res.send({
            success: false,
            message: 'Data profile was not found!'
          })
        }
      })
    } else {
      res.send({
        success: false,
        message: 'Error!'
      })
    }
  }
}
