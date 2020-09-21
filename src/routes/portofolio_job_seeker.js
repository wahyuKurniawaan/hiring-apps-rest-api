const { Router } = require('express')
const {
  getPortofolioJobSeekerData,
  createPortofolioJobSeekerData,
  putPortofolioJobSeekerData,
  deletePortofolioJobSeekerData,
  patchPortofolioJobSeekerData,
  getPortofolioJobSeekerDataById
} = require('../controllers/portofolio_job_seeker')

const router = Router()

router.get('/', getPortofolioJobSeekerData)
router.get('/:id', getPortofolioJobSeekerDataById)
router.post('/', createPortofolioJobSeekerData)
router.put('/:id', putPortofolioJobSeekerData)
router.delete('/:id', deletePortofolioJobSeekerData)
router.patch('/:id', patchPortofolioJobSeekerData)
module.exports = router
