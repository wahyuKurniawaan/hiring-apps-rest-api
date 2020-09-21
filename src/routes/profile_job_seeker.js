const { Router } = require('express')
const {
  getProfileJobSeekerData,
  createProfileJobSeekerData,
  putProfileJobSeekerData,
  deleteProfileJobSeekerData,
  patchProfileJobSeekerData,
  getProfileJobSeekerDataById,
  getProfileJobSeekerDataByName,
  getProfileJobSeekerDataBySkill
} = require('../controllers/profile-job-seeker')

const router = Router()

router.get('/', getProfileJobSeekerData)
router.get('/:id', getProfileJobSeekerDataById)
router.get('/name/:name', getProfileJobSeekerDataByName)
router.get('/skill/:id', getProfileJobSeekerDataBySkill)
router.post('/', createProfileJobSeekerData)
router.put('/:id', putProfileJobSeekerData)
router.delete('/:id', deleteProfileJobSeekerData)
router.patch('/:id', patchProfileJobSeekerData)
module.exports = router
