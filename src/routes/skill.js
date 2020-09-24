const { Router } = require('express')
const {
  getSkillData,
  createSkillData,
  putSkillData,
  deleteSkillData,
  patchSkillData,
  getSkillDataById
} = require('../controllers/skill')
const { authorizationJobSeeker } = require('../middleware/authorization')

const router = Router()

router.get('/', authorizationJobSeeker, getSkillData)
router.get('/:id', getSkillDataById)
router.post('/', createSkillData)
router.put('/:id', putSkillData)
router.delete('/:id', deleteSkillData)
router.patch('/:id', patchSkillData)
module.exports = router
