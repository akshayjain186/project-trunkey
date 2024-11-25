const License = require("../model/licenses"); 

const createLicense = async (req, res) => {
    try {
      const {
        continent, 
        country,  
        language,  
        currency,  
        organisationNumber,
        managerFirstName,
        managerLastName,
        email,
        mobilePhone,
        street,
        city,
        postalCode,
      } = req.body;
  
      if (!Array.isArray(continent) || !Array.isArray(country) || !Array.isArray(language) || !Array.isArray(currency)) {
        return res.status(400).json({
          success: false,
          message: "Continent, country, language, and currency must be arrays.",
        });
      }
  
      const newLicense = await License.create({
        continent,
        country,
        language,
        currency,
        organisationNumber,
        managerFirstName,
        managerLastName,
        email,
        mobilePhone,
        street,
        city,
        postalCode,
      });
  
      return res.status(201).json({
        success: true,
        message: "License created successfully!",
        data: newLicense,
      });
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        const errors = error.errors.map((err) => ({
          field: err.path,
          message: err.message,
        }));
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors,
        });
      }
  
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error.message,
      });
    }
  };
  
  module.exports = {
    createLicense,
  };
  