const { Router } = require('express')
const uploadImage = require('../middleware/multer')
const {
  getProfileJobSeekerData,
  createProfileJobSeekerData,
  putProfileJobSeekerData,
  deleteProfileJobSeekerData,
  patchProfileJobSeekerData,
  getProfileJobSeekerDataById
} = require('../controllers/profile-job-seeker')
const { authorizationJobSeeker } = require('../middleware/authorization')

const router = Router()

router.get('/', authorizationJobSeeker, getProfileJobSeekerData)
router.get('/:id', authorizationJobSeeker, getProfileJobSeekerDataById)
router.post('/', authorizationJobSeeker, uploadImage, createProfileJobSeekerData)
router.put('/:id', authorizationJobSeeker, putProfileJobSeekerData)
router.delete('/:id', authorizationJobSeeker, deleteProfileJobSeekerData)
router.patch('/:id', authorizationJobSeeker, patchProfileJobSeekerData)
module.exports = router
