const { Router } = require('express')
const {
  getSkillData,
  createSkillData,
  putSkillData,
  deleteSkillData,
  patchSkillData,
  getSkillDataById
} = require('../controllers/skill')

const router = Router()

router.get('/', getSkillData)
router.get('/:id', getSkillDataById)
router.post('/', createSkillData)
router.put('/:id', putSkillData)
router.delete('/:id', deleteSkillData)
router.patch('/:id', patchSkillData)
module.exports = router
