const { Router } = require('express')
const {
  getDataProject,
  getDataProjectById,
  createDataProject,
  putDataProject,
  deleteDataProject,
  patchDataProject
} = require('../controllers/project')

const router = Router()

router.get('/', getDataProject)
router.get('/:id', getDataProjectById)
router.post('/', createDataProject)
router.put('/:id', putDataProject)
router.delete('/:id', deleteDataProject)
router.patch('/:id', patchDataProject)
module.exports = router
