const {
  getProjectRecruiterDataModel,
  createProjectRecruiterDataModel,
  putProjectRecruiterDataModel,
  deleteProjectRecruiterDataModel,
  patchProjectRecruiterDataModel,
  getProjectRecruiterDataByIdModel
} = require('../models/project-recruiter')

module.exports = {
  getProjectRecruiterData: (req, res) => {
    let { search, page, limit } = req.query
    let searchKey = ''
    let searchValue = ''
    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.keys(search)[0]
    } else {
      searchKey = 'project_name'
      searchValue = search || ''
    }
    !limit ? limit = 20 : limit = parseInt(limit)
    !page ? page = 1 : page = parseInt(page)
    const offset = (page - 1) * limit
    getProjectRecruiterDataModel(searchKey, searchValue, limit, offset, result => {
      if (result.length) {
        console.log(result)
        res.send({
          success: true,
          message: 'list project recruiter',
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
  getProjectRecruiterDataById: (req, res) => {
    const { id } = req.params
    getProjectRecruiterDataByIdModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data project recruiter with id = ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: true,
          message: `Data project recruiter with id = ${id} was not found!`
        })
      }
    })
  },
  createProjectRecruiterData: (req, res) => {
    const { name, description, startDate, endDate, image, repoLink, idSkill } = req.body
    if (name.trim() && description.trim() && startDate.trim() && endDate.trim() && image.trim() &&
    repoLink.trim() && idSkill.trim()) {
      createProjectRecruiterDataModel([name, description, startDate, endDate, image, repoLink, idSkill], result => {
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
  putProjectRecruiterData: (req, res) => {
    const { name, description, startDate, endDate, image, repoLink, idSkill } = req.body
    const id = req.params.id
    console.log(req.params)
    if (name.trim() && description.trim() && startDate.trim() && endDate.trim() && image.trim() &&
    repoLink.trim() && idSkill.trim()) {
      getProjectRecruiterDataByIdModel(id, result => {
        if (result.length) {
          putProjectRecruiterDataModel(id, [name, description, startDate, endDate, image, repoLink, idSkill], result => {
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
  deleteProjectRecruiterData: (req, res) => {
    const { id } = req.params
    getProjectRecruiterDataByIdModel(id, result => {
      if (result.length) {
        deleteProjectRecruiterDataModel(id, result => {
          if (result.affectedRows) {
            res.send({
              success: true,
              message: `Item project with id = ${id} has been deleted`
            })
          } else {
            res.send({
              success: false,
              message: 'Failed to delete'
            })
          }
        })
      } else {
        console.log(result)
        res.send({
          success: false,
          message: 'Data project was not found!'
        })
      }
    })
  },
  patchProjectRecruiterData: (req, res) => {
    const { id } = req.params
    const {
      project_name = '',
      project_description = '',
      project_start_date = '',
      project_end_date = '',
      project_image = '',
      repository_link = '',
      id_skill = ''
    } = req.body
    if (project_name.trim() || project_description.trim() || project_start_date.trim() ||
    project_end_date.trim() || project_image.trim() || repository_link.trim() || id_skill.trim()) {
      getProjectRecruiterDataByIdModel(id, result => {
        if (result.length) {
          const data = Object.entries(req.body).map(item => {
            return parseInt(item[1]) > 0 ? `${item[0]} = ${item[1]}` : `${item[0]} = '${item[1]}'`
          })
          console.log(data)
          patchProjectRecruiterDataModel(id, data, result => {
            console.log(result)
            if (result.affectedRows) {
              res.send({
                success: true,
                message: `project with id = ${id} has been updated`
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
