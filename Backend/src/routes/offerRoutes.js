const express = require('express');
const router = express.Router();

const {
  createOffer,
  getOfferById,
  getAllOffers,
  updateOffer,
  deleteOffer,
} = require('../controller/offerController'); 

// Route to create a new offer
router.post('/create', createOffer);

router.get('/:Id', getOfferById);

router.get('/offers/getall', getAllOffers);

router.put('/:offerId', updateOffer);

router.delete('/:offerId', deleteOffer);



module.exports = router;
