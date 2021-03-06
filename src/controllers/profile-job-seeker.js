/* eslint-disable camelcase */
const {
  getProfileJobSeekerDataModel,
  createProfileJobSeekerDataModel,
  putProfileJobSeekerDataModel,
  deleteProfileJobSeekerDataModel,
  patchProfileJobSeekerDataModel,
  getProfileJobSeekerDataByIdModel
} = require('../models/profile-job-seeker')

module.exports = {
  getProfileJobSeekerData: (req, res) => {
    let { search, page, limit } = req.query
    let searchKey = ''
    let searchValue = ''
    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.values(search)[0]
    } else {
      searchKey = 'status_job'
      searchValue = search || ''
    }
    !limit ? limit = 30 : limit = parseInt(limit)
    !page ? page = 1 : page = parseInt(page)
    const offset = (page - 1) * limit
    getProfileJobSeekerDataModel(searchKey, searchValue, limit, offset, result => {
      if (result.length) {
        res.status(200).send({
          success: true,
          message: 'list profile job seeker',
          data: result
        })
      } else {
        res.status(404).send({
          success: false,
          message: 'there is no item on list'
        })
      }
    })
  },
  getProfileJobSeekerDataById: (req, res) => {
    const { id } = req.params
    getProfileJobSeekerDataByIdModel(id, result => {
      if (result.length) {
        res.status(200).send({
          success: true,
          message: `Data profile job seeker with id = ${id}`,
          data: result[0]
        })
      } else {
        res.status(404).send({
          success: true,
          message: `Data profile job seeker with id = ${id} was not found!`
        })
      }
    })
  },
  createProfileJobSeekerData: (req, res) => {
    const { user_id } = req.body
    if (user_id) {
      createProfileJobSeekerDataModel(user_id, result => {
        res.status(200).send({
          success: true,
          message: 'profile has been created'
        })
      })
    } else {
      res.status(400).send({
        success: false,
        message: 'all field must be filled!'
      })
    }
  },
  putProfileJobSeekerData: (req, res) => {
    const {
      skill,
      job_title,
      status_job,
      address,
      city,
      workplace,
      description,
      user_name,
      user_email,
      phone_number
    } = req.body
    const id = req.params.id
    const image = typeof req.file === 'undefined' ? '' : req.file.filename
    if (skill && job_title && status_job && address && city && workplace && description &&
      user_name && user_email && phone_number) {
      getProfileJobSeekerDataByIdModel(id, result => {
        if (result.length) {
          putProfileJobSeekerDataModel(id, [skill, job_title, status_job, address, city, workplace,
            description, user_name, user_email, phone_number], image, result => {
            if (result.affectedRows) {
              res.status(200).send({
                success: true,
                message: `profile with id ${id} has been updated`
              })
            } else {
              res.status(400).send({
                success: false,
                message: 'failed to update data'
              })
            }
          })
        } else {
          res.status(404).send({
            success: false,
            message: `profile with id ${id} is not found!`
          })
        }
      })
    } else {
      res.status(400).send({
        success: false,
        message: 'All field must be filled!'
      })
    }
  },
  deleteProfileJobSeekerData: (req, res) => {
    const { id } = req.params
    getProfileJobSeekerDataByIdModel(id, result => {
      if (result.length) {
        deleteProfileJobSeekerDataModel(id, result => {
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
          message: 'Data profile was not found!'
        })
      }
    })
  },
  patchProfileJobSeekerData: (req, res) => {
    const { id } = req.params
    const {
      id_account_job_seeker = '',
      id_portofolio_job_seeker = '',
      id_skill = '',
      email = '',
      full_name = '',
      job_title = '',
      status_job = '',
      address = '',
      city = '',
      workplace = '',
      image = '',
      description = ''
    } = req.body
    if (id_account_job_seeker.trim() || id_portofolio_job_seeker.trim() || id_skill.trim() || email.trim() ||
    full_name.trim() || job_title.trim() || status_job.trim() || address.trim() || city.trim() ||
    workplace.trim() || image.trim() || description.trim()) {
      getProfileJobSeekerDataByIdModel(id, result => {
        if (result.length) {
          const data = Object.entries(req.body).map(item => {
            return parseInt(item[1]) > 0 ? `${item[0]} = ${item[1]}` : `${item[0]} = '${item[1]}'`
          })
          console.log(data)
          patchProfileJobSeekerDataModel(id, data, result => {
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
