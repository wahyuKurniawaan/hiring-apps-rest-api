const { Router } = require('express')
const {
  getDataProject,
  getDataProjectById,
  createDataProject,
  putDataProject,
  deleteDataProject,
  patchDataProject
} = require('../controllers/project')
const { authorizationRecruiter } = require('../middleware/authorization')
const uploadImage = require('../middleware/multer')

const router = Router()

router.get('/', authorizationRecruiter, getDataProject)
router.get('/:id', authorizationRecruiter, getDataProjectById)
router.post('/', authorizationRecruiter, uploadImage, createDataProject)
router.put('/:id', authorizationRecruiter, uploadImage, putDataProject)
router.delete('/:id', authorizationRecruiter, deleteDataProject)
router.patch('/:id', authorizationRecruiter, uploadImage, patchDataProject)
module.exports = router
