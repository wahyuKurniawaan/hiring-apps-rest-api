const { Router } = require('express')
const uploadImage = require('../middleware/multer')
const {
  getProfileRecruiterData,
  createProfileRecruiterData,
  putProfileRecruiterData,
  deleteProfileRecruiterData,
  patchProfileRecruiterData,
  getProfileRecruiterDataById
} = require('../controllers/profile-recruiter')
const { authorizationRecruiter } = require('../middleware/authorization')

const router = Router()

router.get('/', authorizationRecruiter, getProfileRecruiterData)
router.get('/:id', authorizationRecruiter, getProfileRecruiterDataById)
router.post('/', createProfileRecruiterData)
router.put('/:id', authorizationRecruiter, uploadImage, putProfileRecruiterData)
router.delete('/:id', authorizationRecruiter, deleteProfileRecruiterData)
router.patch('/:id', authorizationRecruiter, patchProfileRecruiterData)
module.exports = router
