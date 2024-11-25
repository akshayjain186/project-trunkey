const Job = require('../model/jobModels');
const UserAccount = require('../model/User') 


const createJob = async (req, res) => {
  try {
    const {
      userId, 
      address,
      city,
      state,
      country,
      latitude,
      longitude,
      jobDescription,
      status
    } = req.body;

    // Create the new job record
    const newJob = await Job.create({
      userId, 
      address,
      city,
      state,
      country,
      latitude,
      longitude,
      jobDescription,
      status
    });

    const user = await UserAccount.findByPk(userId); // Assuming 'userId' is the primary key

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(201).json({
      message: 'Job created successfully',
      job: newJob,
      user: user 
    });
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).json({ message: 'Failed to create job', error: error.message });
  }
};


const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll();

    if (jobs.length === 0) {
      return res.status(404).json({
        message: 'No jobs found',
        status: 'error',
      });
    }

    res.status(200).json({
      message: 'Jobs retrieved successfully',
      status: 'success',
      data: jobs,  
    });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({
      message: 'Failed to fetch jobs',
      error: error.message,
    });
  }
};

const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findByPk(jobId);

    if (!job) {
      return res.status(404).json({
        message: 'Job not found'
      });
    }

    res.status(200).json({
      message: 'Job retrieved successfully',
      job
    });
  } catch (error) {
    console.error('Error fetching job:', error);
    res.status(500).json({ message: 'Failed to fetch job', error: error.message });
  }
};

const updateJob = async (req, res) => {
  try {
    const { jobId, ...updatedData } = req.body;

    updatedData.updatedAt = new Date().toISOString();

    const [updatedRows] = await Job.update(updatedData, {
      where: {
        id: jobId
      }
    });

    if (updatedRows > 0) {
      return res.status(200).json({
        message: 'Job updated successfully',
        data: updatedData
      });

    } else {
      return res.status(404).json({ message: 'No job found with the provided ID' });
    }
  } catch (error) {
    console.error('Error updating job:', error);
    return res.status(500).json({ error: 'Error updating job' });
  }
};

const deleteJob = async (req, res) => {
  try {
    const { jobId } = req.params;  

    const deletedRows = await Job.destroy({
      where: {
        id: jobId
      }
    });

    if (deletedRows > 0) {
      return res.status(200).json({ message: 'Job deleted successfully' });
    } else {
      return res.status(404).json({ message: 'No job found with the provided ID' });
    }
  } catch (error) {
    console.error('Error deleting job:', error);
    return res.status(500).json({ error: 'Error deleting job' });
  }
};

module.exports = {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob
};
