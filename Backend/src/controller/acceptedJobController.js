const AcceptedJob = require('../model/accepttedJobModel');
const Job = require('../model/jobModels');
const UserAccount = require('../model/User');
const Offer = require('../model/offerModels'); 

const createAcceptedJob = async (req, res) => {
  try {
      const {
          jobId,
          offerId,
          acceptedBy,
          acceptedDate,
          status,
          remarks,
      } = req.body;

      if (!jobId || !acceptedBy) {
          return res.status(400).json({
              success: false,
              message: 'Job ID and Accepted By fields are required.',
          });
      }

      const job = await Job.findByPk(jobId);
      if (!job) {
          return res.status(404).json({
              success: false,
              message: 'Job not found.',
          });
      }

      const user = await UserAccount.findByPk(acceptedBy);
      if (!user) {
          return res.status(404).json({
              success: false,
              message: 'User not found.',
          });
      }

      if (offerId) {
          const offer = await Offer.findByPk(offerId);
          if (!offer) {
              return res.status(404).json({
                  success: false,
                  message: 'Offer not found.',
              });
          }
      }

      const newAcceptedJob = await AcceptedJob.create({
          jobId,
          offerId,
          acceptedBy,
          acceptedDate,
          status,
          remarks,
      });

      return res.status(201).json({
          success: true,
          message: 'Accepted job created successfully!',
          data: newAcceptedJob,
      });
  } catch (error) {
      console.error('Error creating accepted job:', error);
      return res.status(500).json({
          success: false,
          message: 'An error occurred while creating the accepted job.',
          error: error.message,
      });
  }
};

const getAcceptedJobById = async (req, res) => {
  try {
      const { id } = req.params; 

      const acceptedJob = await AcceptedJob.findByPk(id, {
          include: [
              { model: Job, as: 'job' }, 
              { model: UserAccount, as: 'user' }, 
              { model: Offer, as: 'offer' }, 
          ],
      });

      if (!acceptedJob) {
          return res.status(404).json({
              success: false,
              message: `Accepted job with ID ${id} not found.`,
          });
      }

      return res.status(200).json({
          success: true,
          data: acceptedJob,
      });
  } catch (error) {
      console.error('Error retrieving accepted job by ID:', error);
      return res.status(500).json({
          success: false,
          message: 'An error occurred while retrieving the accepted job.',
          error: error.message,
      });
  }
};

const getAllAcceptedJobs = async (req, res) => {
  try {
      const acceptedJobs = await AcceptedJob.findAll({
          include: [
              { model: Job, as: 'job' }, 
              { model: UserAccount, as: 'user' }, 
              { model: Offer, as: 'offer' }, 
          ],
      });

      if (!acceptedJobs || acceptedJobs.length === 0) {
          return res.status(404).json({
              success: false,
              message: 'No accepted jobs found.',
          });
      }

      return res.status(200).json({
         message: 'Accepted jobs retrieved successfully',
          success: true,
          data: acceptedJobs,
      });

  } catch (error) {
      console.error('Error retrieving accepted jobs:', error);
      return res.status(500).json({
          success: false,
          message: 'An error occurred while retrieving accepted jobs.',
          error: error.message,
      });
  }
};

const updateAcceptedJob = async (req, res) => {
  const { id } = req.params; // Get the ID from the URL params
  const { jobId, offerId, acceptedBy, acceptedDate, status, remarks } = req.body; // Get the new data from the request body

  try {
      // Find the accepted job by ID
      const acceptedJob = await AcceptedJob.findByPk(id, {
          include: [
              { model: Job, as: 'job' }, // Include the Job model
              { model: UserAccount, as: 'user' }, // Include the UserAccount model
              { model: Offer, as: 'offer' }, // Include the Offer model
          ]
      });

      // If the accepted job is not found
      if (!acceptedJob) {
          return res.status(404).json({
              success: false,
              message: `Accepted job with ID ${id} not found.`,
          });
      }

      // Update the accepted job with the new values
      const updatedAcceptedJob = await acceptedJob.update({
          jobId: jobId || acceptedJob.jobId, // If jobId is provided, use it, otherwise keep the existing value
          offerId: offerId || acceptedJob.offerId, // Same for offerId
          acceptedBy: acceptedBy || acceptedJob.acceptedBy, // Same for acceptedBy
          acceptedDate: acceptedDate || acceptedJob.acceptedDate, // Same for acceptedDate
          status: status || acceptedJob.status, // Same for status
          remarks: remarks || acceptedJob.remarks, // Same for remarks
      });

      // Return the updated accepted job
      return res.status(200).json({
          success: true,
          message: 'Accepted job updated successfully',
          data: updatedAcceptedJob,
      });
  } catch (error) {
      console.error('Error updating accepted job:', error);
      return res.status(500).json({
          success: false,
          message: 'An error occurred while updating the accepted job.',
          error: error.message,
      });
  }
};


const deleteAcceptedJob = async (req, res) => {
  const { id } = req.params; 

  try {
      const acceptedJob = await AcceptedJob.findByPk(id);

      if (!acceptedJob) {
          return res.status(404).json({
              success: false,
              message: `Accepted job with ID ${id} not found.`,
          });
      }

      await acceptedJob.destroy();

      return res.status(200).json({
          success: true,
          message: 'Accepted job deleted successfully.',
      });
  } catch (error) {
      console.error('Error deleting accepted job:', error);
      return res.status(500).json({
          success: false,
          message: 'An error occurred while deleting the accepted job.',
          error: error.message,
      });
  }
};

module.exports = {
  createAcceptedJob,
  getAcceptedJobById,
  getAllAcceptedJobs,
  updateAcceptedJob,
  deleteAcceptedJob
};
