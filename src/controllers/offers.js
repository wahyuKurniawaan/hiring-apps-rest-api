/* eslint-disable camelcase */
const {
  getOffersDataModel,
  getOffersDataByIdModel,
  createOffersDataModel,
  putOffersDataModel,
  deleteOffersDataModel
} = require('../models/offers')

module.exports = {
  getOffersData: (req, res) => {
    let { search, page, limit } = req.query
    let searchKey = ''
    let searchValue = ''
    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.values(search)[0]
    } else {
      searchKey = 'id_offer'
      searchValue = search || ''
    }
    !limit ? limit = 20 : limit = parseInt(limit)
    !page ? page = 1 : page = parseInt(page)
    const offset = (page - 1) * limit
    getOffersDataModel(searchKey, searchValue, limit, offset, result => {
      if (result.length) {
        res.send({
          success: true,
          message: 'list offers',
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
  getOffersDataById: (req, res) => {
    const { id } = req.params
    getOffersDataByIdModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data offers with id = ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: false,
          message: `Data skill with id = ${id} was not found!`
        })
      }
    })
  },
  createOffersData: (req, res) => {
    const { id_profile_job_seeker, id_project } = req.body
    if (id_profile_job_seeker.trim() && id_project.trim()) {
      createOffersDataModel([id_profile_job_seeker, id_project], result => {
        console.log(result)
        res.send({
          success: true,
          message: 'Offers has been created'
        })
      })
    } else {
      res.send({
        success: false,
        message: 'the field name skill must be filled!'
      })
    }
  },
  putOffersData: (req, res) => {
    const { id_profile_job_seeker, id_project } = req.body
    const id = req.params.id
    if (id_profile_job_seeker.trim() && id_project.trim()) {
      getOffersDataByIdModel(id, result => {
        if (result.length) {
          putOffersDataModel(id, [id_profile_job_seeker, id_project], result => {
            if (result.affectedRows) {
              res.send({
                success: true,
                message: `Offer with id ${id} has been updated`
              })
            } else {
              console.log(result)
              res.send({
                success: false,
                message: 'failed to update data'
              })
            }
          })
        } else {
          res.send({
            success: false,
            message: `Offer with id ${id} is not found!`
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
  deleteOfferData: (req, res) => {
    const { id } = req.params
    getOffersDataByIdModel(id, result => {
      if (result.length) {
        deleteOffersDataModel(id, result => {
          if (result.affectedRows) {
            res.send({
              success: true,
              message: `Item offer with id = ${id} has been deleted`
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
          message: 'Data offer was not found!'
        })
      }
    })
  }
}
