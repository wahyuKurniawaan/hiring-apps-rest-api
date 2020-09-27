const { Router } = require('express')
const {
  getAccountJobSeekerData,
  createAccountJobSeekerData,
  putAccountJobSeekerData,
  deleteAccountJobSeekerData,
  patchAccountJobSeekerData,
  getAccountJobSeekerDataById
} = require('../controllers/account-job-seeker')
const { authorizationJobSeeker } = require('../middleware/authorization')

const router = Router()

router.get('/', authorizationJobSeeker, getAccountJobSeekerData)
router.get('/:id', authorizationJobSeeker, getAccountJobSeekerDataById)
router.post('/', authorizationJobSeeker, createAccountJobSeekerData)
router.put('/:id', authorizationJobSeeker, putAccountJobSeekerData)
router.delete('/:id', authorizationJobSeeker, deleteAccountJobSeekerData)
router.patch('/:id', authorizationJobSeeker, patchAccountJobSeekerData)
module.exports = router
