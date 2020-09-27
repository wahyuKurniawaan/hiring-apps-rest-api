const { Router } = require('express')
const {
  getAccountRecruiterData,
  createAccountRecruiterData,
  putAccountRecruiterData,
  deleteAccountRecruiterData,
  patchAccountRecruiterData,
  getAccountRecruiterDataById
} = require('../controllers/account-recruiter')
const { authorizationRecruiter } = require('../middleware/authorization')

const router = Router()

router.get('/', authorizationRecruiter, getAccountRecruiterData)
router.get('/:id', authorizationRecruiter, getAccountRecruiterDataById)
router.post('/', authorizationRecruiter, createAccountRecruiterData)
router.put('/:id', authorizationRecruiter, putAccountRecruiterData)
router.delete('/:id', authorizationRecruiter, deleteAccountRecruiterData)
router.patch('/:id', authorizationRecruiter, patchAccountRecruiterData)
module.exports = router
