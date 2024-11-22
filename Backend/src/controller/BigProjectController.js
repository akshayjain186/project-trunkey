// const BigProject = require('../model/BigProject');
// const  User  = require('../model/User'); // Assuming User model exists in the models folder.
// const Category = require('../model/Categories');
// const Subcategory = require('../model/Subcategories');
// const Projectmanagerole = require('../model/Projectmanagerole');





// const createBigProject = async (req, res) => {
//     try {
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
//             selectsubcategory, // Subcategories with attachments
//         } = req.body;

//         // Validation check
//         if (
//             !name ||
//             !typeOfProject ||
//             !categoryId ||
//             !subcategoryId ||
//             !projectmanageroleId ||
//             !typeOfHome ||
//             !projectAddress ||
//             !city ||
//             !generalComment ||
//             !contactName ||
//             !contactSurname ||
//             !contactEmail ||
//             !contactMobile ||
//             !selectsubcategory || !Array.isArray(selectsubcategory)
//         ) {
//             return res.status(400).json({
//                 message: 'All fields are required.',
//                 status: 'error',
//             });
//         }

//         // Email validation
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(contactEmail)) {
//             return res.status(400).json({
//                 message: 'Invalid email format.',
//                 status: 'error',
//             });
//         }

//         // Create the SmallProject
//         const smallproject = await SmallProject.create({
//             name,
//             typeOfProject,
//             categoryId: categoryId,
//             subcategoryId: subcategoryId,
//             projectmanageroleId: projectmanageroleId,
//             typeOfHome,
//             projectAddress,
//             city,
//             generalComment,
//             contactName,
//             contactSurname,
//             contactEmail,
//             contactMobile,
//         });

//         // Retrieve the project ID
//         const smallprojectId = smallproject.id;

//         // Store created ProjectSubcategory data
//         const createdSubcategories = [];

//         // Iterate over the subcategories and create them
//         for (const subcategory of selectsubcategory) {
//             const { id, description, attachment, floor } = subcategory;

//             if (!id || !description || !attachment || !floor) {
//                 return res.status(400).json({
//                     message: 'Each subcategory must have id, description, attachment, and floor.',
//                     status: 'error',
//                 });
//             }

//             const newSubcategory = await ProjectSubcategory.create({
//                 smallprojectId,
//                 subcategoryId: id,
//                 description,
//                 attachment, // Attachments provided by the client
//                 floor,
//             });

//             // Add the created subcategory to the array
//             createdSubcategories.push(newSubcategory);
//         }

//         // Success response including SmallProject and ProjectSubcategory data
//         return res.status(201).json({
//             message: 'Project created successfully',
//             project: smallproject, // SmallProject data
//             subcategories: createdSubcategories, // Array of created subcategories
//             status: 'success',
//         });
//     } catch (error) {
//         console.error('Error creating project:', error);
//         return res.status(500).json({
//             message: 'An error occurred while creating the project',
//             error: error.message,
//             status: 'error',
//         });
//     }
// };

// const getAllBigProject = async (req, res) => {
//     try {
//         const projects = await SmallProject.findAll();
//         if (!projects.length) {
//             return res.status(404).json({
//                 message: 'No projects found',
//                 status: 'error',
//             });
//         }
//         res.status(200).json({
//             message: 'Fetched all projects successfully',
//             data: projects,
//             status: 'success',
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             message: 'Error fetching projects',
//             error: error.message,
//             status: 'error',
//         });
//     }
// };

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



// module.exports = {
//     createBigProject,
//     getAllBigProject,
//     getBigProjectById,
//      updateBigProject,
//      deleteBigProject,
//      uploadAttachment
// };