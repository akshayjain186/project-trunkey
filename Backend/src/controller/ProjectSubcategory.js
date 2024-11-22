// const Category = require('../model/Categories');
// const SmallProject = require('../model/Project');
// const ProjectSubcategory = require('../model/ProjectSubcategory');
// const Subcategory = require('../model/Subcategories');


// // Create a new project subcategory
// const createProjectSubcategory = async (req, res) => {
//     const { subcategoryId, smallprojectId, categoryId, description, attachment, floor } = req.body;

//     try {
//         // Create a new ProjectSubcategory
//         const subcategory = await ProjectSubcategory.create({
//             subcategoryId,
//             smallprojectId,
//             categoryId,
//             description,
//             attachment,
//             floor,
//         });

//         if (!subcategory) {
//             return res.status(400).json({
//                 message: 'Resource not found',
//                 status: 'false',
//             });
//         }

//         const detailedSubcategory = await ProjectSubcategory.findOne({
//             where: { id: subcategory.id },
//             include: [
//                 {
//                     model: SmallProject,
//                     as: 'smallproject', // The alias defined in the association
//                     attributes: { exclude: ['createdAt', 'updatedAt'] }, 
//                 },
//                 {
//                     model: Category,
//                     as: 'category',
//                     attributes: ['id', 'title'],
//                 },
//                 {
//                     model: Subcategory,
//                     as: 'subcategory',
//                     attributes: ['name', 'categoryId'],
//                 },
//             ],
//         });

//         res.status(201).json({
//             message: 'ProjectSubcategory added successfully',
//             data: detailedSubcategory,
//             status: 'success',
//         });
//     } catch (error) {
//         res.status(500).json({
//             error: error.message,
//             status: false,
//         });
//     }
// };

// // Fetch all project subcategories
// const getAllProjectSubcategory = async (req, res) => {
//     try {
//         const subcategory = await ProjectSubcategory.findAll();
//         res.status(200).json(subcategory);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // const uploadAttachment = async (req, res) => {
// //     // Check if files are provided
// //     if (!req.files || req.files.length === 0) {
// //       return res.status(400).json({ message: 'No files uploaded', status: 'error' });
// //     }

// //     const { ProjectSubcategoryId } = req.body;

// //     // Validate if extraworkId is provided
// //     if (!ProjectSubcategoryId) {
// //       return res.status(400).json({ message: 'Extrawork ID is required', status: 'error' });
// //     }

// //     // Find the Extrawork by ID
// //     const findProjectSubcategory = await Extrawork.findById(ProjectSubcategoryId);

// //     if (!findProjectSubcategory) {
// //       return res.status(404).json({ message: 'Extrawork not found', status: 'error' });
// //     }

// //     // Process each uploaded file and add the filename to the attachments array
// //     const fileUrls = req.files.map(file => `${req.protocol}://${req.get('host')}/uploads/ProjectSubcategoryimg/${file.filename}`);

// //     // Add the uploaded files to the 'attachments' field
// //     findProjectSubcategory.attachment.push(...fileUrls);

// //     // Save the updated Extrawork document
// //     await findProjectSubcategory.save();

// //     // Respond with the updated extrawork data and file URLs
// //     res.status(200).json({
// //       message: 'Files uploaded successfully',
// //       data: findProjectSubcategory,
// //       attachments: findProjectSubcategory.attachment,
// //     });
// //   };

// // const uploadAttachment = async (req, res) => {
// //     // Check if files are provided
// //     if (!req.files || req.files.length === 0) {
// //         return res.status(400).json({ message: 'No files uploaded', status: 'error' });
// //     }

// //     const { ProjectSubcategoryId } = req.params;

// //     // Validate if ProjectSubcategoryId is provided
// //     if (!ProjectSubcategoryId) {
// //         return res.status(400).json({ message: 'ProjectSubcategory ID is required', status: 'error' });
// //     }

// //     try {
// //         const findProjectSubcategory = await ProjectSubcategory.findByPk(ProjectSubcategoryId);

// //         if (!findProjectSubcategory) {
// //             return res.status(404).json({ message: 'ProjectSubcategory not found', status: 'error' });
// //         }

// //         // Process and validate each uploaded file
// //         const fileUrls = [];
// //         for (const file of req.files) {
// //             if (!file.mimetype.startsWith('image/')) {
// //                 return res.status(400).json({ message: `Invalid file type for ${file.originalname}. Only images are allowed.`, status: 'error' });
// //             }

// //             if (file.size > 5 * 1024 * 1024) { // 5MB limit for example
// //                 return res.status(400).json({ message: `File ${file.originalname} is too large. Max size is 5MB.`, status: 'error' });
// //             }


// //             const fileUrl = req.files.map(file => `${req.protocol}://${req.get('host')}/uploads/${file.filename}`);
// //             fileUrls.push(fileUrl);
// //         }

// //         if (!Array.isArray(findProjectSubcategory.attachment)) {
// //             findProjectSubcategory.attachment = [];
// //         }


// //         findProjectSubcategory.attachment.push(...fileUrls);


// //         await findProjectSubcategory.update({
// //             attachment: findProjectSubcategory.attachment,  
// //         });


// //         res.status(200).json({
// //             message: 'Files uploaded successfully',
// //             data: findProjectSubcategory,
// //             attachments: findProjectSubcategory.attachment, 
// //         });
// //     } catch (err) {
// //         // Handle any errors that occur during the process
// //         console.error('Error uploading files:', err);
// //         res.status(500).json({ message: 'An error occurred while uploading files', status: 'error', error: err.message });
// //     }
// // };
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
//         // Find the ProjectSubcategory by ID using findByPk (Primary Key)
//         const findProjectSubcategory = await ProjectSubcategory.findByPk(ProjectSubcategoryId);

//         // Check if the ProjectSubcategory exists
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

//             // Create the file URL
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

//         // Respond with the updated ProjectSubcategory data and file URLs
//         res.status(200).json({
//             message: 'Files uploaded successfully',
//             data: findProjectSubcategory,
//             attachments: findProjectSubcategory.attachment, // Send the array of uploaded image URLs
//         });
//     } catch (err) {
//         // Handle any errors that occur during the process
//         console.error('Error uploading files:', err);
//         res.status(500).json({ message: 'An error occurred while uploading files', status: 'error', error: err.message });
//     }
// };




// module.exports = {
//     createProjectSubcategory,
//     getAllProjectSubcategory,
//     uploadAttachment
// }