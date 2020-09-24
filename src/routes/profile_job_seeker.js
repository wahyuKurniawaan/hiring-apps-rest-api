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

const router = Router()

router.get('/', getProfileJobSeekerData)
router.get('/:id', getProfileJobSeekerDataById)
router.post('/', uploadImage, createProfileJobSeekerData)
router.put('/:id', putProfileJobSeekerData)
router.delete('/:id', deleteProfileJobSeekerData)
router.patch('/:id', patchProfileJobSeekerData)
module.exports = router
