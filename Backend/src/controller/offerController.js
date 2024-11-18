const Offer = require('../model/offerModels');  
const Job = require('../model/jobModels'); 
const User = require('../model/User');  

const createOffer = async (req, res) => {
    try {
      const { job, offeredBy, offerDetails, status } = req.body;
  
      if (!job || !offeredBy || !offerDetails) {
        return res.status(400).json({ message: 'Job, offeredBy, and offerDetails are required' });
      }
  
      const newOffer = await Offer.create({
        jobId: job, 
        offeredBy: offeredBy,
        offerDetails: offerDetails,
        status: status || 'Pending', 
      });
  
      const jobData = await Job.findByPk(job); 
      const userData = await User.findByPk(offeredBy); 
  
      res.status(201).json({
        message: 'Offer created successfully',
        offer: {
          id: newOffer.id,
          job: jobData,      
          offeredBy: userData,
          offerDetails: newOffer.offerDetails,
          status: newOffer.status,
        },
      });
  
    } catch (error) {
      console.error('Error creating offer:', error);
      res.status(500).json({ message: 'Error creating offer' });
    }
  };

  const getOfferById = async (req, res) => {
    try {
      const { offerId } = req.params; 
      
      if (!offerId) {
        return res.status(400).json({ message: 'Offer ID is required' });
      }
      
      const offer = await Offer.findByPk(offerId); 
      
      if (!offer) {
        return res.status(404).json({ message: 'Offer not found' });
      }
      
      const jobData = await Job.findByPk(offer.jobId);
      const userData = await User.findByPk(offer.offeredBy);
      
      res.status(200).json({
        message: "Offer details retrieved successfully.",
        offer: {
          id: offer.id,
          job: jobData,
          offeredBy: userData,
          offerDetails: offer.offerDetails,
          status: offer.status,
        },
      });
      
    } catch (error) {
      console.error('Error fetching offer:', error);
      res.status(500).json({ message: 'Error fetching offer' });
    }
  };
  

  const getAllOffers = async (req, res) => {
    try {
      const offers = await Offer.findAll();
  
      if (offers.length === 0) {
        return res.status(404).json({
          message: 'No offers found',
          status: 'error',
        });
      }
  
      res.status(200).json({
        message: 'All Offers retrieved successfully',
        status: 'success',
        data: offers,  
      });
    } catch (error) {
      console.error('Error fetching offers:', error);
      res.status(500).json({
        message: 'Failed to fetch offers',
        error: error.message,
      });
    }
  };
  
  

  const updateOffer = async (req, res) => {
    try {
        const { offerId } = req.params; 
        const { job, offeredBy, offerDetails, status } = req.body; 

        if (!offerId) {
            return res.status(400).json({ message: 'Offer ID is required' });
        }

        const offer = await Offer.findByPk(offerId);
        if (!offer) {
            return res.status(404).json({ message: 'Offer not found' });
        }

        if (offeredBy) {
            const offeredByUser = await User.findByPk(offeredBy);
            if (!offeredByUser) {
                return res.status(400).json({ message: 'Invalid user ID for offeredBy' });
            }
            offer.offeredBy = offeredBy; 
        }

        offer.jobId = job || offer.jobId;
        offer.offerDetails = offerDetails || offer.offerDetails;
        offer.status = status || offer.status;

        await offer.save();

        res.status(200).json({
            message: 'Offer updated successfully',
            offer,
        });
    } catch (error) {
        console.error('Error updating offer:', error);
        res.status(500).json({ message: 'Error updating offer' });
    }
};

const deleteOffer = async (req, res) => {
    try {
      const { offerId } = req.params;
  
      if (!offerId) {
        return res.status(400).json({ message: 'Offer ID is required' });
      }
  
      const offer = await Offer.findByPk(offerId);
  
      if (!offer) {
        return res.status(404).json({ message: 'Offer not found' });
      }
  
      await offer.destroy();
  
      res.status(200).json({ message: 'Offer deleted successfully' });
    } catch (error) {
      console.error('Error deleting offer:', error);
      res.status(500).json({ message: 'Error deleting offer' });
    }
  };
  

module.exports={
    createOffer,
    getOfferById,
    getAllOffers,
    updateOffer,
    deleteOffer
}
