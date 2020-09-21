const { Router } = require('express')
const {
  getAccountRecruiterData,
  createAccountRecruiterData,
  putAccountRecruiterData,
  deleteAccountRecruiterData,
  patchAccountRecruiterData,
  getAccountRecruiterDataById
} = require('../controllers/account-recruiter')

const router = Router()

router.get('/', getAccountRecruiterData)
router.get('/:id', getAccountRecruiterDataById)
router.post('/', createAccountRecruiterData)
router.put('/:id', putAccountRecruiterData)
router.delete('/:id', deleteAccountRecruiterData)
router.patch('/:id', patchAccountRecruiterData)
module.exports = router
