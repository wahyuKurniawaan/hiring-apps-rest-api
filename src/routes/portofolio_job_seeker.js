const { Router } = require('express')
const {
  getPortofolioJobSeekerData,
  createPortofolioJobSeekerData,
  putPortofolioJobSeekerData,
  deletePortofolioJobSeekerData,
  patchPortofolioJobSeekerData,
  getPortofolioJobSeekerDataById
} = require('../controllers/portofolio_job_seeker')
const { authorizationJobSeeker } = require('../middleware/authorization')

const router = Router()

router.get('/', authorizationJobSeeker, getPortofolioJobSeekerData)
router.get('/:id', authorizationJobSeeker, getPortofolioJobSeekerDataById)
router.post('/', authorizationJobSeeker, createPortofolioJobSeekerData)
router.put('/:id', authorizationJobSeeker, putPortofolioJobSeekerData)
router.delete('/:id', authorizationJobSeeker, deletePortofolioJobSeekerData)
router.patch('/:id', authorizationJobSeeker, patchPortofolioJobSeekerData)
module.exports = router
