const SmallProject = require('../model/Project');
const ProjectSubcategory = require('../model/ProjectSubcategory');
const Category = require('../model/Categories');
const Subcategory = require('../model/Subcategories');
const Projectmanagerole = require('../model/Projectmanagerole');
const User = require('../model/User');
const crypto = require('crypto'); 
const nodemailer = require('nodemailer'); 

//new function of generate password by email

// Function to generate a random password
const generatePassword = () => {
  return Math.random().toString(36).slice(-8); // Generates an 8-character random password
};
// Set up your email transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Replace with your email provider
  auth: {
    user: 'kv2334779@gmail.com', // Replace with your email
    pass: 'ehrj sjnn drow ioqn', // Replace with your email password
  },
});
const createProject = async (req, res) => {
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
      selectsubcategory,
      users,
    } = req.body;

    // Validate main fields
    const requiredFields = {
      name,
      typeOfProject,
      categoryId,
      subcategoryId,
      projectmanageroleId,
      typeOfHome,
      projectAddress,
      city,
    };

    for (const [key, value] of Object.entries(requiredFields)) {
      if (!value) {
        return res.status(400).json({
          message: `${key} is required.`,
          status: 'error',
        });
      }
    }

    // Validate foreign keys
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

    // Create the SmallProject
    const smallproject = await SmallProject.create({
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

    // Process and validate subcategories with attachments
    const createdSubcategories = [];
    if (Array.isArray(selectsubcategory)) {
      for (const subcategory of selectsubcategory) {
        const { id, description, attachment, floor } = subcategory;
        if (!id || !description || !attachment || !floor) {
          return res.status(400).json({
            message:
              'Each subcategory must have id, description, attachment, and floor.',
            status: 'error',
          });
        }
        const newSubcategory = await ProjectSubcategory.create({
          smallprojectId: smallproject.id,
          subcategoryId: id,
          description,
          attachment,
          floor,
        });
        createdSubcategories.push(newSubcategory);
      }
    }

    // If users are provided in the form, create them and associate them with the project
    const createdUsers = [];
    if (users && Array.isArray(users)) {
      for (const user of users) {
        const { Name, Surname, email, Mobilephone ,roleId} = user;

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

        // Create the user and associate with smallprojectId
        const newUser = await User.create({
          Name,
          Surname,
          email,
          Mobilephone,
          roleId,
          password: hashedPassword, // Save hashed password
          smallprojectId: smallproject.id,
        });

        // Send the password via email
        await transporter.sendMail({
          from: 'kv2334779@gmail.com',
          to:user.email, // User's email
          subject: 'Your Account Details',
          text: `Hi ${Name},\n\nYour account has been created successfully.\nHere are your login details:\nEmail: ${email}\nPassword: ${password}\n\nPlease keep this information secure.\n\nThank you!`,
        });

        createdUsers.push(newUser);
      }
    }

    return res.status(201).json({
      message: 'Project and users created successfully',
      project: {
        ...smallproject.toJSON(),
      },
      subcategories: createdSubcategories,
      users: createdUsers,
      status: 'success',
    });
  } catch (error) {
    console.error('Error creating project:', error);
    return res.status(500).json({
      message: 'An error occurred while creating the project.',
      error: error.message,
      status: 'error',
    });
  }
};

// const getAllProject = async (req, res) => {
//   try {
//     // Fetch all projects
//     const projects = await SmallProject.findAll();

//     if (!projects.length) {
//       return res.status(404).json({
//         message: 'No projects found',
//         status: 'error',
//       });
//     }

//     // Fetch related data manually
//     const smallProjectIds = projects.map((project) => project.id);

//     // Fetch project subcategories with their attachments
//     const projectSubcategories = await ProjectSubcategory.findAll({
//       where: {
//         smallprojectId: smallProjectIds,
//       },
//       attributes: [
//         'smallprojectId',
//         'subcategoryId',
//         'description',
//         'attachment',
//         'floor',
//       ],
//     });

//     // Map the related data to the projects
//     const projectsWithDetails = projects.map((project) => ({
//       ...project.toJSON(),
//       subcategories: projectSubcategories
//         .filter((psc) => psc.smallprojectId === project.id)
//         .map((psc) => ({
//           subcategoryId: psc.subcategoryId,
//           description: psc.description,
//           attachment: psc.attachment,
//           floor: psc.floor,
//         })),
//     }));

//     res.status(200).json({
//       message: 'Fetched all projects successfully',
//       data: projectsWithDetails,
//       status: 'success',
//     });
//   } catch (error) {
//     console.error('Error fetching projects:', error);
//     res.status(500).json({
//       message: 'Error fetching projects',
//       error: error.message,
//       status: 'error',
//     });
//   }
// };

const getAllProject = async (req, res) => {
  try {
    // Fetch all projects
    const projects = await SmallProject.findAll();

    if (!projects.length) {
      return res.status(404).json({
        message: 'No projects found',
        status: 'error',
      });
    }

    // Fetch related data manually
    const smallProjectIds = projects.map((project) => project.id);

    // Fetch project subcategories with their attachments
    const projectSubcategories = await ProjectSubcategory.findAll({
      where: {
        smallprojectId: smallProjectIds,
      },
      attributes: [
        'smallprojectId',
        'subcategoryId',
        'description',
        'attachment',
        'floor',
      ],
    });

    // Fetch users associated with each project
    const projectUsers = await User.findAll({
      where: {
        smallprojectId: smallProjectIds,
      },
      attributes: ['Name', 'Surname', 'email', 'Mobilephone', 'roleId'],
    });

    // Map the related data to the projects
    const projectsWithDetails = projects.map((project) => ({
      ...project.toJSON(),
      subcategories: projectSubcategories
        .filter((psc) => psc.smallprojectId === project.id)
        .map((psc) => ({
          subcategoryId: psc.subcategoryId,
          description: psc.description,
          attachment: psc.attachment,
          floor: psc.floor,
        })),
      users: projectUsers
        .filter((user) => user.smallprojectId === project.id)
        .map((user) => ({
          Name: user.Name,
          Surname: user.Surname,
          email: user.email,
          Mobilephone: user.Mobilephone,
          roleId: user.roleId,
        })),
    }));

    res.status(200).json({
      message: 'Fetched all projects successfully',
      data: projectsWithDetails,
      status: 'success',
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({
      message: 'Error fetching projects',
      error: error.message,
      status: 'error',
    });
  }
};

const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch the SmallProject by its ID
    const project = await SmallProject.findByPk(id);

    if (!project) {
      return res.status(404).json({
        message: 'Project not found',
        status: 'error',
      });
    }

    const projectSubcategories = await ProjectSubcategory.findAll({
      where: { smallprojectId: id },
      attributes: ['subcategoryId', 'description', 'attachment', 'floor'],
    });

    const projectWithDetails = {
      ...project.toJSON(),
      subcategories: projectSubcategories.map((psc) => ({
        subcategoryId: psc.subcategoryId,
        description: psc.description,
        attachment: psc.attachment,
        floor: psc.floor,
      })),
    };

    res.status(200).json({
      message: 'Fetched project successfully',
      data: projectWithDetails,
      status: 'success',
    });
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({
      message: 'Error fetching project',
      error: error.message,
      status: 'error',
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
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
      contactName,
      contactSurname,
      contactEmail,
      contactMobile,
    } = req.body;

    // Validate that the project exists
    const project = await SmallProject.findByPk(id);
    if (!project) {
      return res.status(404).json({
        message: 'Project not found',
        status: 'error',
      });
    }

    // Validation for categoryId
    if (categoryId && !Array.isArray(categoryId)) {
      return res.status(400).json({
        message: 'categoryId must be an array',
        status: 'error',
      });
    }
    if (categoryId && categoryId.length > 0) {
      const validCategoryIds = await Category.findAll({
        where: {
          id: categoryId,
        },
        attributes: ['id'],
      });
      if (validCategoryIds.length !== categoryId.length) {
        return res.status(400).json({
          message: ' categoryId do not exist',
          status: 'error',
        });
      }
    }

    // Validation for subcategoryId
    if (subcategoryId && !Array.isArray(subcategoryId)) {
      return res.status(400).json({
        message: 'subcategoryId must be an array',
        status: 'error',
      });
    }
    if (subcategoryId && subcategoryId.length > 0) {
      const validSubcategoryIds = await Subcategory.findAll({
        where: {
          id: subcategoryId,
        },
        attributes: ['id'],
      });
      if (validSubcategoryIds.length !== subcategoryId.length) {
        return res.status(400).json({
          message: ' subcategoryId do not exist',
          status: 'error',
        });
      }
    }

    // Validation for projectmanageroleId
    if (projectmanageroleId && !Array.isArray(projectmanageroleId)) {
      return res.status(400).json({
        message: 'projectmanageroleId must be an array',
        status: 'error',
      });
    }
    if (projectmanageroleId && projectmanageroleId.length > 0) {
      const validProjectManagerRoleIds = await ProjectManagerRole.findAll({
        where: {
          id: projectmanageroleId,
        },
        attributes: ['id'],
      });
      if (validProjectManagerRoleIds.length !== projectmanageroleId.length) {
        return res.status(400).json({
          message: ' projectmanageroleId do not exist',
          status: 'error',
        });
      }
    }

    // Update the project
    await project.update({
      name,
      typeOfProject,
      categoryId: categoryId ? JSON.stringify(categoryId) : project.categoryId,
      subcategoryId: subcategoryId
        ? JSON.stringify(subcategoryId)
        : project.subcategoryId,
      projectmanageroleId: projectmanageroleId
        ? JSON.stringify(projectmanageroleId)
        : project.projectmanageroleId,
      typeOfHome,
      projectAddress,
      city,
      generalComment,
      contactName,
      contactSurname,
      contactEmail,
      contactMobile,
    });

    res.status(200).json({
      message: 'Project updated successfully',
      data: project,
      status: 'success',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error updating project',
      error: error.message,
      status: 'error',
    });
  }
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteCount = await SmallProject.destroy({ where: { id } });

    if (!deleteCount) {
      return res.status(404).json({
        message: 'Project not found',
        status: 'error',
      });
    }

    res.status(200).json({
      message: 'Project deleted successfully',
      status: 'success',
      data: deleteCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error deleting project',
      error: error.message,
      status: 'error',
    });
  }
};

const uploadAttachment = async (req, res) => {
  // Check if files are provided
  if (!req.files || req.files.length === 0) {
    return res
      .status(400)
      .json({ message: 'No files uploaded', status: 'error' });
  }

  const { ProjectSubcategoryId } = req.params;

  // Validate if ProjectSubcategoryId is provided
  if (!ProjectSubcategoryId) {
    return res
      .status(400)
      .json({ message: 'ProjectSubcategory ID is required', status: 'error' });
  }

  try {
    const findProjectSubcategory =
      await ProjectSubcategory.findByPk(ProjectSubcategoryId);

    if (!findProjectSubcategory) {
      return res
        .status(404)
        .json({ message: 'ProjectSubcategory not found', status: 'error' });
    }

    // Process and validate each uploaded file
    const newFileUrls = [];
    for (const file of req.files) {
      // Add validation for file type and size
      if (!file.mimetype.startsWith('image/')) {
        return res
          .status(400)
          .json({
            message: `Invalid file type for ${file.originalname}. Only images are allowed.`,
            status: 'error',
          });
      }

      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit for example
        return res
          .status(400)
          .json({
            message: `File ${file.originalname} is too large. Max size is 5MB.`,
            status: 'error',
          });
      }

      const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;
      newFileUrls.push(fileUrl);
    }

    // If attachment field is missing or not an array, initialize it
    if (!Array.isArray(findProjectSubcategory.attachment)) {
      findProjectSubcategory.attachment = [];
    }

    // Merge existing attachments with the new file URLs dynamically
    findProjectSubcategory.attachment = [
      ...findProjectSubcategory.attachment,
      ...newFileUrls,
    ];

    // Save the updated ProjectSubcategory with new attachments
    await findProjectSubcategory.save();

    res.status(200).json({
      message: 'Files uploaded successfully',
      data: findProjectSubcategory,
      attachments: findProjectSubcategory.attachment,
    });
  } catch (err) {
    console.error('Error uploading files:', err);
    res
      .status(500)
      .json({
        message: 'An error occurred while uploading files',
        status: 'error',
        error: err.message,
      });
  }
};

module.exports = {
  createProject,
  getAllProject,
  getProjectById,
  updateProject,
  deleteProject,
  uploadAttachment,
};
