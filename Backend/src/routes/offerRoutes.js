const express = require('express');
const router = express.Router();

const {
  createOffer,
  getOfferById,
  getAllOffers,
  updateOffer,
  deleteOffer,
} = require('../controller/offerController'); 

router.post('/create', createOffer);

router.get('/:offerId', getOfferById); 

router.get('/', getAllOffers);

router.put('/:offerId', updateOffer);

router.delete('/:offerId', deleteOffer);



module.exports = router;
