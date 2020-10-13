const { Router } = require('express')
const { getOffersData, getOffersDataById, createOffersData, putOffersData, deleteOfferData } = require('../controllers/offers')
const { authorizationRecruiter } = require('../middleware/authorization')

const router = Router()

router.get('/', authorizationRecruiter, getOffersData)
router.get('/:id', authorizationRecruiter, getOffersDataById)
router.post('/', authorizationRecruiter, createOffersData)
router.put('/:id', authorizationRecruiter, putOffersData)
router.delete('/:id', authorizationRecruiter, deleteOfferData)
module.exports = router
