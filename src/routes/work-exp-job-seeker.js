const { Router } = require('express')
const {
  getWorkExpJobSeekerData,
  createWorkExpJobSeekerData,
  putWorkExpJobSeekerData,
  deleteWorkExpJobSeekerData,
  patchWorkExpJobSeekerData,
  getWorkExpJobSeekerDataById
} = require('../controllers/work-exp-job-seeker')

const router = Router()

router.get('/', getWorkExpJobSeekerData)
router.get('/:id', getWorkExpJobSeekerDataById)
router.post('/', createWorkExpJobSeekerData)
router.put('/:id', putWorkExpJobSeekerData)
router.delete('/:id', deleteWorkExpJobSeekerData)
router.patch('/:id', patchWorkExpJobSeekerData)
module.exports = router
