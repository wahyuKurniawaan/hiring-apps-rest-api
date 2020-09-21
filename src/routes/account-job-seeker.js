const { Router } = require('express')
const {
  getAccountJobSeekerData,
  createAccountJobSeekerData,
  putAccountJobSeekerData,
  deleteAccountJobSeekerData,
  patchAccountJobSeekerData,
  getAccountJobSeekerDataById
} = require('../controllers/account-job-seeker')

const router = Router()

router.get('/', getAccountJobSeekerData)
router.get('/:id', getAccountJobSeekerDataById)
router.post('/', createAccountJobSeekerData)
router.put('/:id', putAccountJobSeekerData)
router.delete('/:id', deleteAccountJobSeekerData)
router.patch('/:id', patchAccountJobSeekerData)
module.exports = router
