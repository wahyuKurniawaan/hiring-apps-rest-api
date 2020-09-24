const { Router } = require('express')
const multer = require('multer')
const upload = multer({ dest: './uploads/' })
const {
  getProjectRecruiterData,
  createProjectRecruiterData,
  putProjectRecruiterData,
  deleteProjectRecruiterData,
  patchProjectRecruiterData,
  getProjectRecruiterDataById
} = require('../controllers/project-recruiter')

const router = Router()

router.get('/', getProjectRecruiterData)
router.get('/:id', getProjectRecruiterDataById)
router.post('/', upload.single('image'), createProjectRecruiterData)
router.put('/:id', putProjectRecruiterData)
router.delete('/:id', deleteProjectRecruiterData)
router.patch('/:id', patchProjectRecruiterData)
module.exports = router
