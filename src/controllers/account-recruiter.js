const {
  getAccountRecruiterDataModel,
  createAccountRecruiterDataModel,
  putAccountRecruiterDataModel,
  deleteAccountRecruiterDataModel,
  patchAccountRecruiterDataModel,
  getAccountRecruiterDataByIdModel
} = require('../models/account-recruiter')

module.exports = {
  getAccountRecruiterData: (req, res) => {
    let { search, page, limit } = req.query
    let searchKey = ''
    let searchValue = ''
    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.keys(search)[0]
    } else {
      searchKey = 'full_name'
      searchValue = search || ''
    }
    !limit ? limit = 20 : limit = parseInt(limit)
    !page ? page = 1 : page = parseInt(page)
    const offset = (page - 1) * limit
    getAccountRecruiterDataModel(searchKey, searchValue, limit, offset, result => {
      if (result.length) {
        console.log(result)
        res.send({
          success: true,
          message: 'list account recruiter',
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
  getAccountRecruiterDataById: (req, res) => {
    const { id } = req.params
    getAccountRecruiterDataByIdModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data account recruiter with id = ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: true,
          message: `Data account recruiter with id = ${id} was not found!`
        })
      }
    })
  },
  createAccountRecruiterData: (req, res) => {
    const { email, fullName, companyName, roleTitle, noHandphone, password, status } = req.body
    if (email.trim() && fullName.trim() && companyName.trim() && roleTitle.trim() && noHandphone.trim() &&
    password.trim() && status.trim()) {
      createAccountRecruiterDataModel([email, fullName, companyName, roleTitle,
        noHandphone, password, status], result => {
        res.send({
          success: true,
          message: 'Account has been created',
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
  putAccountRecruiterData: (req, res) => {
    const { email, fullName, companyName, roleTitle, noHandphone, password, status } = req.body
    const id = req.params.id
    console.log(req.params)
    if (email.trim() && fullName.trim() && companyName.trim() && roleTitle.trim() &&
    noHandphone.trim() && password.trim() && status.trim()) {
      getAccountRecruiterDataByIdModel(id, result => {
        if (result.length) {
          putAccountRecruiterDataModel({
            id,
            data: [email, fullName, companyName, roleTitle, noHandphone, password, status]
          }, result => {
            if (result.affectedRows) {
              res.send({
                success: true,
                message: `Account with id ${id} has been updated`
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
            message: `account with id ${id} is not found!`
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
  deleteAccountRecruiterData: (req, res) => {
    const { id } = req.params
    getAccountRecruiterDataByIdModel(id, result => {
      if (result.length) {
        deleteAccountRecruiterDataModel(id, result => {
          if (result.affectedRows) {
            res.send({
              success: true,
              message: `Item account with id = ${id} has been deleted`
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
          message: 'Data account was not found!'
        })
      }
    })
  },
  patchAccountRecruiterData: (req, res) => {
    const { id } = req.params
    const {
      email = '',
      full_name = '',
      company_name = '',
      role_title = '',
      no_handphone = '',
      password = '',
      status = ''
    } = req.body
    if (email.trim() || full_name.trim() || company_name.trim() || role_title.trim() ||
    no_handphone.trim() || password.trim() || status.trim()) {
      getAccountRecruiterDataByIdModel(id, result => {
        if (result.length) {
          const data = Object.entries(req.body).map(item => {
            return parseInt(item[1]) > 0 ? `${item[0]} = ${item[1]}` : `${item[0]} = '${item[1]}'`
          })
          console.log(data)
          patchAccountRecruiterDataModel({ id, data }, result => {
            console.log(result)
            if (result.affectedRows) {
              res.send({
                success: true,
                message: `account with id = ${id} has been updated`
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
            message: 'Data account was not found!'
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
