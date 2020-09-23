const { Router } = require('express')
const {
  registerUser,
  loginUser
} = require('../controllers/user')

const { authorization } = require('../middleware/authorization')

const router = Router()

router.post('/register/', registerUser)
router.post('/login/', loginUser)

module.exports = router
