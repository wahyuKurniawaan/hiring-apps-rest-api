const { Router } = require('express')
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
router.post('/', authorizationRecruiter, createProfileRecruiterData)
router.put('/:id', authorizationRecruiter, putProfileRecruiterData)
router.delete('/:id', authorizationRecruiter, deleteProfileRecruiterData)
router.patch('/:id', authorizationRecruiter, patchProfileRecruiterData)
module.exports = router
