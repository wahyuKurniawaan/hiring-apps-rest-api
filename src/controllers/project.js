const {
  getDataProjectModel,
  getDataProjectByIdModel,
  createDataProjectModel,
  putDataProjectModel,
  deleteDataProjectModel,
  patchDataProjectModel
} = require('../models/project')

module.exports = {
  getDataProject: (req, res) => {
    let { search, page, limit } = req.query
    let searchKey = ''
    let searchValue = ''
    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.values(search)[0]
    } else {
      searchKey = 'name'
      searchValue = search || ''
    }
    !limit ? limit = 20 : limit = parseInt(limit)
    !page ? page = 1 : page = parseInt(page)
    const offset = (page - 1) * limit
    getDataProjectModel(searchKey, searchValue, limit, offset, result => {
      if (result.length) {
        res.send({
          success: true,
          message: 'list project',
          data: result
        })
      } else {
        res.send({
          success: true,
          message: 'there is no item on list'
        })
      }
    })
  },
  getDataProjectById: (req, res) => {
    const { id } = req.params
    getDataProjectByIdModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data project id ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: true,
          message: `Data project id ${id} was not found!`
        })
      }
    })
  },
  createDataProject: (req, res) => {
    const { name, description, price, duration } = req.body
    if (name && description && price && duration) {
      createDataProjectModel([name, description, price, duration], result => {
        // console.log(result)
        res.send({
          success: true,
          message: 'project has been created',
          data: req.body
        })
      })
    } else {
      res.send({
        success: false,
        message: 'all field must be filled!'
      })
    }
  },
  putDataProject: (req, res) => {
    const { name, description, price, duration } = req.body
    const id = req.params.id
    console.log(req.params)
    if (name.trim() && description.trim() && price.trim() && duration.trim()) {
      getDataProjectByIdModel(id, result => {
        if (result.length) {
          putDataProjectModel({ id, data: [name, description, price, duration] }, result => {
            if (result.affectedRows) {
              res.send({
                success: true,
                message: `project with id ${id} has been updated`
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
            message: `project with id ${id} is not found!`
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
  deleteDataProject: (req, res) => {
    const { id } = req.params
    getDataProjectByIdModel(id, result => {
      if (result.length) {
        deleteDataProjectModel(id, result => {
          if (result.affectedRows) {
            res.send({
              success: true,
              message: `Item project id ${id} has been deleted`
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
          message: 'Data project was not found!'
        })
      }
    })
  },
  patchDataProject: (req, res) => {
    const { id } = req.params
    const { name = '', description = '', price = '', duration = '' } = req.body
    if (name.trim() || description.trim() || price.trim() || duration.trim()) {
      getDataProjectByIdModel(id, result => {
        if (result.length) {
          const data = Object.entries(req.body).map(item => {
            return parseInt(item[1]) > 0 ? `${item[0]} = ${item[1]}` : `${item[0]} = '${item[1]}'`
          })
          console.log(data)
          patchDataProjectModel({ id, data }, result => {
            console.log(result)
            if (result.affectedRows) {
              res.send({
                success: true,
                message: `project with id ${id} has been updated`
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
            message: 'Data project was not found!'
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
