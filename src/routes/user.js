const { Router } = require('express')
const {
  registerUser,
  loginUser,
  getDataUser,
  getUserDataById,
  putUserData,
  deleteUserData
} = require('../controllers/user')
const { authorizationAdmin } = require('../middleware/authorization')

const router = Router()

router.post('/register/', registerUser)
router.post('/login/', loginUser)
router.get('/', authorizationAdmin, getDataUser)
router.get('/:id', authorizationAdmin, getUserDataById)
router.put('/:id', authorizationAdmin, putUserData)
router.delete('/:id', authorizationAdmin, deleteUserData)

module.exports = router
