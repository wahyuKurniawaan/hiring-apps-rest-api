const { Router } = require('express')
const {
  getProfileRecruiterData,
  createProfileRecruiterData,
  putProfileRecruiterData,
  deleteProfileRecruiterData,
  patchProfileRecruiterData,
  getProfileRecruiterDataById
} = require('../controllers/profile-recruiter')

const router = Router()

router.get('/', getProfileRecruiterData)
router.get('/:id', getProfileRecruiterDataById)
router.post('/', createProfileRecruiterData)
router.put('/:id', putProfileRecruiterData)
router.delete('/:id', deleteProfileRecruiterData)
router.patch('/:id', patchProfileRecruiterData)
module.exports = router
