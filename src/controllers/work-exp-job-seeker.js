const {
  getWorkExpJobSeekerDataModel,
  createWorkExpJobSeekerDataModel,
  putWorkExpJobSeekerDataModel,
  deleteWorkExpJobSeekerDataModel,
  patchWorkExpJobSeekerDataModel,
  getWorkExpJobSeekerDataByIdModel
} = require('../models/work-exp-job-seeker')

module.exports = {
  getWorkExpJobSeekerData: (req, res) => {
    let { search, page, limit } = req.query
    let searchKey = ''
    let searchValue = ''
    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.values(search)[0]
    } else {
      searchKey = 'company_name'
      searchValue = search || ''
    }
    !limit ? limit = 20 : limit = parseInt(limit)
    !page ? page = 1 : page = parseInt(page)
    const offset = (page - 1) * limit
    getWorkExpJobSeekerDataModel(searchKey, searchValue, limit, offset, result => {
      if (result.length) {
        res.send({
          success: true,
          message: 'list work experience job seeker',
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
  getWorkExpJobSeekerDataById: (req, res) => {
    const { id } = req.params
    getWorkExpJobSeekerDataByIdModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data work experience job seeker with id = ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: true,
          message: `Data work experience job seeker with id = ${id} was not found!`
        })
      }
    })
  },
  createWorkExpJobSeekerData: (req, res) => {
    const {
      idProfile,
      position,
      companyName,
      startDate,
      endDate,
      description
    } = req.body
    if (idProfile && position && companyName && description) {
      createWorkExpJobSeekerDataModel([
        idProfile,
        position,
        companyName,
        startDate,
        endDate,
        description
      ], result => {
        console.log(result)
        res.send({
          success: true,
          message: 'Work Experience has been created',
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
  putWorkExpJobSeekerData: (req, res) => {
    const {
      idProfile,
      position,
      companyName,
      startDate,
      endDate,
      description
    } = req.body
    const id = req.params.id
    console.log(req.params)
    if (idProfile.trim() && position.trim() && companyName.trim() && startDate.trim() &&
    endDate.trim() && description.trim()) {
      getWorkExpJobSeekerDataByIdModel(id, result => {
        if (result.length) {
          putWorkExpJobSeekerDataModel(id, [
            idProfile,
            position,
            companyName,
            startDate,
            endDate,
            description
          ], result => {
            if (result.affectedRows) {
              res.send({
                success: true,
                message: `work experience with id ${id} has been updated`
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
            message: `work experience with id ${id} is not found!`
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
  deleteWorkExpJobSeekerData: (req, res) => {
    const { id } = req.params
    getWorkExpJobSeekerDataByIdModel(id, result => {
      if (result.length) {
        deleteWorkExpJobSeekerDataModel(id, result => {
          if (result.affectedRows) {
            res.send({
              success: true,
              message: `Item work experience with id = ${id} has been deleted`
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
          message: 'Data work experience was not found!'
        })
      }
    })
  },
  patchWorkExpJobSeekerData: (req, res) => {
    const { id } = req.params
    const {
      id_profile_job_seeker = '',
      position = '',
      company_name = '',
      start_date = '',
      end_date = '',
      description = ''
    } = req.body
    if (id_profile_job_seeker.trim() || position.trim() || company_name.trim() || start_date.trim() ||
    end_date.trim() || description.trim()) {
      getWorkExpJobSeekerDataByIdModel(id, result => {
        if (result.length) {
          const data = Object.entries(req.body).map(item => {
            return parseInt(item[1]) > 0 ? `${item[0]} = ${item[1]}` : `${item[0]} = '${item[1]}'`
          })
          console.log(data)
          patchWorkExpJobSeekerDataModel(id, data, result => {
            console.log(result)
            if (result.affectedRows) {
              res.send({
                success: true,
                message: `work experience with id = ${id} has been updated`
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
            message: 'Data work experience was not found!'
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
