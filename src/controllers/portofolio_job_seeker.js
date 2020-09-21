const {
  getPortofolioJobSeekerDataModel,
  createPortofolioJobSeekerDataModel,
  putPortofolioJobSeekerDataModel,
  deletePortofolioJobSeekerDataModel,
  patchPortofolioJobSeekerDataModel,
  getPortofolioJobSeekerDataByIdModel
} = require('../models/portofolio_job_seeker')

module.exports = {
  getPortofolioJobSeekerData: (req, res) => {
    let { search, page, limit } = req.query
    let searchKey = ''
    let searchValue = ''
    if (typeof search === 'object') {
      searchKey = Object.keys(search)[0]
      searchValue = Object.keys(search)[0]
    } else {
      searchKey = 'application_name'
      searchValue = search || ''
    }
    !limit ? limit = 20 : limit = parseInt(limit)
    !page ? page = 1 : page = parseInt(page)
    const offset = (page - 1) * limit
    getPortofolioJobSeekerDataModel(searchKey, searchValue, limit, offset, result => {
      if (result.length) {
        res.send({
          success: true,
          message: 'list portofolio job seeker',
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
  getPortofolioJobSeekerDataById: (req, res) => {
    const { id } = req.params
    getPortofolioJobSeekerDataByIdModel(id, result => {
      if (result.length) {
        res.send({
          success: true,
          message: `Data portofolio job seeker with id = ${id}`,
          data: result[0]
        })
      } else {
        res.send({
          success: true,
          message: `Data portofolio job seeker with id = ${id} was not found!`
        })
      }
    })
  },
  createPortofolioJobSeekerData: (req, res) => {
    const { applicationName, description, publicationLink, repositoryLink, workplace, type, portofolioImage } = req.body
    if (applicationName && description && publicationLink && repositoryLink && workplace && type && portofolioImage) {
      createPortofolioJobSeekerDataModel([
        applicationName,
        description,
        publicationLink,
        repositoryLink,
        workplace,
        type,
        portofolioImage
      ], result => {
        console.log(result)
        res.send({
          success: true,
          message: 'portofolio has been created',
          data: console.log(req.body)
        })
      })
    } else {
      res.send({
        success: false,
        message: 'all field must be filled!',
        data: console.log(req.body)
      })
    }
  },
  putPortofolioJobSeekerData: (req, res) => {
    const { appName, description, publishLink, repoLink, workplace, type, portoImage } = req.body
    const id = req.params.id
    console.log(req.params)
    if (appName.trim() && description.trim() && publishLink.trim() && repoLink.trim() && workplace.trim() &&
    type.trim() && portoImage.trim()) {
      getPortofolioJobSeekerDataByIdModel(id, result => {
        if (result.length) {
          putPortofolioJobSeekerDataModel(id, [appName, description, publishLink, repoLink, workplace, type, portoImage], result => {
            if (result.affectedRows) {
              res.send({
                success: true,
                message: `portofolio with id ${id} has been updated`
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
            message: `portofolio with id ${id} is not found!`
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
  deletePortofolioJobSeekerData: (req, res) => {
    const { id } = req.params
    getPortofolioJobSeekerDataByIdModel(id, result => {
      if (result.length) {
        deletePortofolioJobSeekerDataModel(id, result => {
          if (result.affectedRows) {
            res.send({
              success: true,
              message: `Item portofolio with id = ${id} has been deleted`
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
  patchPortofolioJobSeekerData: (req, res) => {
    const { id } = req.params
    const {
      application_name = '',
      description = '',
      publication_link = '',
      repository_link = '',
      workplace = '',
      type = '',
      portofolio_image = ''
    } = req.body
    if (application_name.trim() || description.trim() || publication_link.trim() || repository_link.trim() ||
    workplace.trim() || type.trim() || portofolio_image.trim()) {
      getPortofolioJobSeekerDataByIdModel(id, result => {
        if (result.length) {
          const data = Object.entries(req.body).map(item => {
            return parseInt(item[1]) > 0 ? `${item[0]} = ${item[1]}` : `${item[0]} = '${item[1]}'`
          })
          console.log(data)
          patchPortofolioJobSeekerDataModel(id, data, result => {
            console.log(result)
            if (result.affectedRows) {
              res.send({
                success: true,
                message: `portofolio with id = ${id} has been updated`
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
            message: 'Data portofolio was not found!'
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
