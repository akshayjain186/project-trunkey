const BigProject = require('../model/BigProject');
const BigProjectSubcategory = require('../model/BigProjectSubcategory');
const Category = require('../model/Categories');
const Subcategory = require('../model/Subcategories');
const Projectmanagerole = require('../model/Projectmanagerole');
const User = require('../model/User');
const crypto = require('crypto'); 
const nodemailer = require('nodemailer'); 



const generatePassword = () => {
    return Math.random().toString(36).slice(-8); // Generates an 8-character random password
  };
  
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Replace with your email provider
    auth: {
      user: 'kv2334779@gmail.com', // Replace with your email
      pass: 'ehrj sjnn drow ioqn', // Replace with your email password
    },
  });
  
  const createBigProject = async (req, res) => {
    try {
      const {
        name,
        typeOfProject,
        categoryId,
        subcategoryId,
        projectmanageroleId,
        typeOfHome,
        projectAddress,
        city,
        generalComment,
        selectbigsubcategory, 
        users, 
      } = req.body;
  
      // Validate required fields
      const requiredFields = {
        name,
        typeOfProject,
        categoryId,
        subcategoryId,
        projectmanageroleId,
        typeOfHome,
        projectAddress,
        city,
        generalComment,
        selectbigsubcategory,
      };
  
      for (const [key, value] of Object.entries(requiredFields)) {
        if (!value) {
          return res.status(400).json({
            message: `${key} is required.`,
            status: 'error',
          });
        }
      }
  
    //   // Email validation
    //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //   if (!emailRegex.test(contactEmail)) {
    //     return res.status(400).json({
    //       message: 'Invalid email format.',
    //       status: 'error',
    //     });
    //   }
  
      // Validate foreign keys (category, subcategory, and project manager role)
      const [categories, subcategories, projectManagerRoles] = await Promise.all([
        Category.findAll({ where: { id: categoryId } }),
        Subcategory.findAll({ where: { id: subcategoryId } }),
        Projectmanagerole.findAll({ where: { id: projectmanageroleId } }),
      ]);
  
      if (!categories.length) {
        return res.status(400).json({
          message: 'Invalid categoryId.',
          status: 'error',
        });
      }
  
      if (!subcategories.length) {
        return res.status(400).json({
          message: 'Invalid subcategoryId.',
          status: 'error',
        });
      }
  
      if (!projectManagerRoles.length) {
        return res.status(400).json({
          message: 'Invalid projectmanageroleId.',
          status: 'error',
        });
      }
  
      // Create the BigProject
      const bigproject = await BigProject.create({
        name,
        typeOfProject,
        categoryId,
        subcategoryId,
        projectmanageroleId,
        typeOfHome,
        projectAddress,
        city,
        generalComment,
      });
  
      // Process and create subcategories
      const createdBigSubcategories = [];
      if (Array.isArray(selectbigsubcategory)) {
        for (const bigsubcategory of selectbigsubcategory) {
          const { id, description, attachment, floor } = bigsubcategory;
  
          if (!id || !description || !attachment || !floor) {
            return res.status(400).json({
              message: 'Each subcategory must have id, description, attachment, and floor.',
              status: 'error',
            });
          }
  
          const newBigSubcategory = await BigProjectSubcategory.create({
            bigprojectId: bigproject.id,
            subcategoryId: id,
            description,
            attachment,
            floor,
          });
  
          createdBigSubcategories.push(newBigSubcategory);
        }
      }
  
      // If users are provided, create them and associate with the big project
      const createdUsers = [];
      if (users && Array.isArray(users)) {
        for (const user of users) {
          const { Name, Surname, email, Mobilephone ,roleId } = user;
  
          // Validate user fields
          if (!Name || !Surname || !email || !Mobilephone || !roleId) {
            return res.status(400).json({
              message: 'User details are incomplete.',
              status: 'error',
            });
          }
  
          // Generate a random password
          const password = generatePassword();
  
          // Hash the password before saving to the database
          const hashedPassword = crypto
            .createHash('sha256')
            .update(password)
            .digest('hex');
  
          // Create the user and associate with bigprojectId
          const newUser = await User.create({
            Name,
            Surname,
            email,
            Mobilephone,
            roleId,
            password: hashedPassword, // Save hashed password
            bigprojectId: bigproject.id,
          });

          console.log("Created user:", newUser);
  
          // Send the password via email
          await transporter.sendMail({
            from: 'kv2334779@gmail.com',
            to: user.email, // User's email
            subject: 'Your Account Details',
            text: `Hi ${Name},\n\nYour account has been created successfully.\nHere are your login details:\nEmail: ${email}\nPassword: ${password}\n\nPlease keep this information secure.\n\nThank you!`,
          });
  
          createdUsers.push(newUser);
        }
      }
  
      // Success response including Big Project, ProjectSubcategory, and Users data
      return res.status(201).json({
        message: 'Big Project and users created successfully',
        project: bigproject,
        subcategories: createdBigSubcategories,
        users: createdUsers,
        status: 'success',
      });
    } catch (error) {
      console.error('Error creating Big Project:', error);
      return res.status(500).json({
        message: 'An error occurred while creating the Big Project.',
        error: error.message,
        status: 'error',
      });
    }
  };
  
const getAllBigProject = async (req, res) => {

    try {
        const projects = await SmallProject.findAll();
        if (!projects.length) {
            return res.status(404).json({
                message: 'No projects found',
                status: 'error',
            });
        }
        res.status(200).json({
            message: 'Fetched all projects successfully',
            data: projects,
            status: 'success',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error fetching projects',
            error: error.message,
            status: 'error',
        });
    }
};

// const getBigProjectById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const project = await SmallProject.findByPk(id);
//         if (!project) {
//             return res.status(404).json({
//                 message: 'Project not found',
//                 status: 'error',
//             });
//         }
//         res.status(200).json({
//             message: 'Fetched project successfully',
//             data: project,
//             status: 'success',
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             message: 'Error fetching project',
//             error: error.message,
//             status: 'error',
//         });
//     }
// };

// const updateBigProject = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const {
//             name,
//             typeOfProject,
//             categoryId,
//             subcategoryId,
//             projectmanageroleId,
//             typeOfHome,
//             projectAddress,
//             city,
//             generalComment,
//             contactName,
//             contactSurname,
//             contactEmail,
//             contactMobile,
//         } = req.body;

//         const project = await SmallProject.findByPk(id);

//         if (!project) {
//             return res.status(404).json({
//                 message: 'Project not found',
//                 status: 'error',
//             });
//         }

//         // Update the project
//         await project.update({
//             name,
//             typeOfProject,
//             categoryId: JSON.stringify(categoryId),
//             subcategoryId: JSON.stringify(subcategoryId),
//             projectmanageroleId: JSON.stringify(projectmanageroleId),
//             typeOfHome,
//             projectAddress,
//             city,
//             generalComment,
//             contactName,
//             contactSurname,
//             contactEmail,
//             contactMobile,
//         });

//         res.status(200).json({
//             message: 'Project updated successfully',
//             data: project,
//             status: 'success',
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             message: 'Error updating project',
//             error: error.message,
//             status: 'error',
//         });
//     }
// };

// const deleteBigProject = async (req, res) => {
//     try {
//         const { id } = req.params;

//         const deleteCount = await SmallProject.destroy({ where: { id } });

//         if (!deleteCount) {
//             return res.status(404).json({
//                 message: 'Project not found',
//                 status: 'error',
//             });
//         }

//         res.status(200).json({
//             message: 'Project deleted successfully',
//             status: 'success',
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             message: 'Error deleting project',
//             error: error.message,
//             status: 'error',
//         });
//     }
// };

// const uploadAttachment = async (req, res) => {
//     // Check if files are provided
//     if (!req.files || req.files.length === 0) {
//         return res.status(400).json({ message: 'No files uploaded', status: 'error' });
//     }

//     const { ProjectSubcategoryId } = req.params;

//     // Validate if ProjectSubcategoryId is provided
//     if (!ProjectSubcategoryId) {
//         return res.status(400).json({ message: 'ProjectSubcategory ID is required', status: 'error' });
//     }

//     try {

//         const findProjectSubcategory = await ProjectSubcategory.findByPk(ProjectSubcategoryId);

//         if (!findProjectSubcategory) {
//             return res.status(404).json({ message: 'ProjectSubcategory not found', status: 'error' });
//         }

//         // Process and validate each uploaded file
//         const newFileUrls = [];
//         for (const file of req.files) {
//             // Add validation for file type and size
//             if (!file.mimetype.startsWith('image/')) {
//                 return res.status(400).json({ message: `Invalid file type for ${file.originalname}. Only images are allowed.`, status: 'error' });
//             }

//             if (file.size > 5 * 1024 * 1024) { // 5MB limit for example
//                 return res.status(400).json({ message: `File ${file.originalname} is too large. Max size is 5MB.`, status: 'error' });
//             }

//             const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;
//             newFileUrls.push(fileUrl);
//         }

//         // If attachment field is missing or not an array, initialize it
//         if (!Array.isArray(findProjectSubcategory.attachment)) {
//             findProjectSubcategory.attachment = [];
//         }

//         // Merge existing attachments with the new file URLs dynamically
//         findProjectSubcategory.attachment = [...findProjectSubcategory.attachment, ...newFileUrls];

//         // Save the updated ProjectSubcategory with new attachments
//         await findProjectSubcategory.save();

//         res.status(200).json({
//             message: 'Files uploaded successfully',
//             data: findProjectSubcategory,
//             attachments: findProjectSubcategory.attachment,
//         });
//     } catch (err) {

//         console.error('Error uploading files:', err);
//         res.status(500).json({ message: 'An error occurred while uploading files', status: 'error', error: err.message });
//     }
// };



module.exports = {
    createBigProject,
    getAllBigProject,
//     getBigProjectById,
//      updateBigProject,
//      deleteBigProject,
//      uploadAttachment
};