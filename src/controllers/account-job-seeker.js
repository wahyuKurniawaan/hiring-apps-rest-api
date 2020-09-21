const {
  getAccountJobSeekerDataModel,
  createAccountJobSeekerDataModel,
  putAccountJobSeekerDataModel,
  deleteAccountJobSeekerDataModel,
  patchAccountJobSeekerDataModel,
  getAccountJobSeekerDataByIdModel
} = require('../models/account-job-seeker')

module.exports = {
  getAccountJobSeekerData: (req, res) => {
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
    getAccountJobSeekerDataModel(searchKey, searchValue, limit, offset, result => {
      if (result.length) {
        res.send({
          success: true,
          message: 'list account job seeker',
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
  getAccountJobSeekerDataById: (req, res) => {
    const { id } = req.params
    getAccountJobSeekerDataByIdModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data account job seeker with id = ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: true,
          message: `Data account job seeker with id = ${id} was not found!`
        })
      }
    })
  },
  createAccountJobSeekerData: (req, res) => {
    const { email, fullName, noHandphone, password, status } = req.body
    if (email && fullName && noHandphone && password && status) {
      createAccountJobSeekerDataModel([email, fullName, noHandphone, password, status], result => {
        console.log(result)
        res.send({
          success: true,
          message: 'Account has been created',
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
  putAccountJobSeekerData: (req, res) => {
    const { email, fullName, noHandphone, password, status } = req.body
    const id = req.params.id
    console.log(req.params)
    if (email.trim() && fullName.trim() && noHandphone.trim() && password.trim() && status.trim()) {
      getAccountJobSeekerDataByIdModel(id, result => {
        if (result.length) {
          putAccountJobSeekerDataModel(id, [email, fullName, noHandphone, password, status], result => {
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
  deleteAccountJobSeekerData: (req, res) => {
    const { id } = req.params
    getAccountJobSeekerDataByIdModel(id, result => {
      if (result.length) {
        deleteAccountJobSeekerDataModel(id, result => {
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
        res.send({
          success: false,
          message: 'Data account was not found!'
        })
      }
    })
  },
  patchAccountJobSeekerData: (req, res) => {
    const { id } = req.params
    const {
      email = '',
      full_name = '',
      no_handphone = '',
      password = '',
      status = ''
    } = req.body
    if (email.trim() || full_name.trim() || no_handphone.trim() || password.trim() || status.trim()) {
      getAccountJobSeekerDataByIdModel(id, result => {
        if (result.length) {
          const data = Object.entries(req.body).map(item => {
            return parseInt(item[1]) > 0 ? `${item[0]} = ${item[1]}` : `${item[0]} = '${item[1]}'`
          })
          console.log(data)
          patchAccountJobSeekerDataModel(id, data, result => {
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
