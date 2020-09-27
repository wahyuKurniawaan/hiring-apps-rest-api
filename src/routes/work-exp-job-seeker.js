const { Router } = require('express')
const {
  getWorkExpJobSeekerData,
  createWorkExpJobSeekerData,
  putWorkExpJobSeekerData,
  deleteWorkExpJobSeekerData,
  patchWorkExpJobSeekerData,
  getWorkExpJobSeekerDataById
} = require('../controllers/work-exp-job-seeker')
const { authorizationJobSeeker } = require('../middleware/authorization')

const router = Router()

router.get('/', authorizationJobSeeker, getWorkExpJobSeekerData)
router.get('/:id', authorizationJobSeeker, getWorkExpJobSeekerDataById)
router.post('/', authorizationJobSeeker, createWorkExpJobSeekerData)
router.put('/:id', authorizationJobSeeker, putWorkExpJobSeekerData)
router.delete('/:id', authorizationJobSeeker, deleteWorkExpJobSeekerData)
router.patch('/:id', authorizationJobSeeker, patchWorkExpJobSeekerData)
module.exports = router
