const {
  getSkillDataModel,
  createSkillDataModel,
  putSkillDataModel,
  deleteSkillDataModel,
  patchSkillDataModel,
  getSkillDataByIdModel
} = require('../models/skill')

module.exports = {
  getSkillData: (req, res) => {
    let { search, page, limit } = req.query
    let searchKey = ''
    let searchValue = ''
    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.values(search)[0]
    } else {
      searchKey = 'name_skill'
      searchValue = search || ''
    }
    !limit ? limit = 20 : limit = parseInt(limit)
    !page ? page = 1 : page = parseInt(page)
    const offset = (page - 1) * limit
    getSkillDataModel(searchKey, searchValue, limit, offset, result => {
      if (result.length) {
        res.send({
          success: true,
          message: 'list skill',
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
  getSkillDataById: (req, res) => {
    const { id } = req.params
    getSkillDataByIdModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data skill with id = ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: true,
          message: `Data skill with id = ${id} was not found!`
        })
      }
    })
  },
  createSkillData: (req, res) => {
    const { nameSkill } = req.body
    if (nameSkill.trim()) {
      createSkillDataModel(nameSkill, result => {
        console.log(result)
        res.send({
          success: true,
          message: 'skill has been created',
          data: console.log(req.body)
        })
      })
    } else {
      res.send({
        success: false,
        message: 'the field name skill must be filled!'
      })
    }
  },
  putSkillData: (req, res) => {
    const { nameSkill } = req.body
    const id = req.params.id
    console.log(req.params)
    if (nameSkill.trim()) {
      getSkillDataByIdModel(id, result => {
        if (result.length) {
          putSkillDataModel(id, nameSkill, result => {
            if (result.affectedRows) {
              res.send({
                success: true,
                message: `skill with id ${id} has been updated`
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
            message: `skill with id ${id} is not found!`
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
  deleteSkillData: (req, res) => {
    const { id } = req.params
    getSkillDataByIdModel(id, result => {
      if (result.length) {
        deleteSkillDataModel(id, result => {
          if (result.affectedRows) {
            res.send({
              success: true,
              message: `Item skill with id = ${id} has been deleted`
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
          message: 'Data skill was not found!'
        })
      }
    })
  },
  patchSkillData: (req, res) => {
    const { id } = req.params
    const { name_skill = '' } = req.body
    if (name_skill.trim()) {
      getSkillDataByIdModel(id, result => {
        if (result.length) {
          const data = Object.entries(req.body).map(item => {
            return parseInt(item[1]) > 0 ? `${item[0]} = ${item[1]}` : `${item[0]} = '${item[1]}'`
          })
          console.log(data)
          patchSkillDataModel(id, data, result => {
            console.log(result)
            if (result.affectedRows) {
              res.send({
                success: true,
                message: `skill with id = ${id} has been updated`
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
            message: 'Data skill was not found!'
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
