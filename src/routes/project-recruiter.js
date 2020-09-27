const { Router } = require('express')
const uploadImage = require('../middleware/multer')
const {
  getProjectRecruiterData,
  createProjectRecruiterData,
  putProjectRecruiterData,
  deleteProjectRecruiterData,
  patchProjectRecruiterData,
  getProjectRecruiterDataById
} = require('../controllers/project-recruiter')
const { authorizationRecruiter } = require('../middleware/authorization')

const router = Router()

router.get('/', authorizationRecruiter, getProjectRecruiterData)
router.get('/:id', authorizationRecruiter, getProjectRecruiterDataById)
router.post('/', authorizationRecruiter, uploadImage, createProjectRecruiterData)
router.put('/:id', authorizationRecruiter, putProjectRecruiterData)
router.delete('/:id', authorizationRecruiter, deleteProjectRecruiterData)
router.patch('/:id', authorizationRecruiter, patchProjectRecruiterData)

module.exports = router
