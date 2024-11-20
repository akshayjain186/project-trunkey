const SmallProject = require('../model/Project');
const ProjectSubcategory = require('../model/ProjectSubcategory');

// const Category = require('../model/Categories');
// const Subcategory = require('../model/Subcategories');
// const Projectmanagerole = require('../model/Projectmanagerole');

// const createProject = async (req, res) => {
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
//             !contactName ||
//             !contactSurname ||
//             !contactEmail ||
//             !contactMobile
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

//         // Create new project
//         const project = await SmallProject.create({
//             name,
//             typeOfProject,
//             categoryId: JSON.stringify(categoryId), // Convert array to JSON
//             subcategoryId: JSON.stringify(subcategoryId), // Convert array to JSON
//             projectmanageroleId: JSON.stringify(projectmanageroleId), // Convert array to JSON
//             typeOfHome,
//             projectAddress,
//             city,
//             generalComment,
//             contactName,
//             contactSurname,
//             contactEmail,
//             contactMobile,
//         });

//          // Create a new ProjectSubcategory

//         //  const subcategory = await ProjectSubcategory.create({
//         //     subcategoryId,
//         //     smallprojectId,
//         //     description,
//         //     attachment,
//         //     floor,
//         // });

//         //Fetch project with related subcategory data
//         // const createdProject = await SmallProject.findOne({
//         //     where: { id: project.id },
//         //     include: [
//         //         {
//         //             model: projectSubcategory,
//         //             as: 'projectsubcategory',
//         //         },
//         //     ],
//         // });

//         return res.status(201).json({
//             message: 'Project created successfully',
//             data: project,
//             data: createdProject,
//             status: 'success',
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({
//             message: 'An error occurred while creating the project',
//             error: error.message,
//             status: 'error',
//         });
//     }
// };


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
            contactName,
            contactSurname,
            contactEmail,
            contactMobile,
            description, // For ProjectSubcategory
            attachment,  // For ProjectSubcategory
            floor,       // For ProjectSubcategory
        } = req.body;

        // Validation check
        if (
            !name ||
            !typeOfProject ||
            !categoryId ||
            !subcategoryId ||
            !projectmanageroleId ||
            !typeOfHome ||
            !projectAddress ||
            !city ||
            !generalComment ||
            !contactName ||
            !contactSurname ||
            !contactEmail ||
            !contactMobile
        ) {
            return res.status(400).json({
                message: 'All fields are required.',
                status: 'error',
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(contactEmail)) {
            return res.status(400).json({
                message: 'Invalid email format.',
                status: 'error',
            });
        }

        // Create new project
        const project = await SmallProject.create({
            name,
            typeOfProject,
            categoryId: JSON.stringify(categoryId),
            subcategoryId: JSON.stringify(subcategoryId),
            projectmanageroleId: JSON.stringify(projectmanageroleId),
            typeOfHome,
            projectAddress,
            city,
            generalComment,
            contactName,
            contactSurname,
            contactEmail,
            contactMobile,
        });

     if (Array.isArray(subcategoryId)) {
    const projectSubcategoryPromises = [];

    // Loop through subcategoryId array
    // for (let i = 0; i < subcategoryId.length; i++) {
    //     const subId = subcategoryId[i];
    //     console.log(`Creating ProjectSubcategory with:`);
    //     console.log(`subcategoryId: ${subId}`);
    //     console.log(`smallprojectId: ${project.id}`);

    //     // Create a ProjectSubcategory and push the promise to the array
    //     projectSubcategoryPromises.push(
    //         ProjectSubcategory.create({

    //             subcategoryId: subId,
    //             description: description || null,
    //             attachment: attachment ? JSON.stringify(attachment) : null,
    //             floor: floor || null,
    //         })
    //     );
    // }

    // // Wait for all ProjectSubcategory entries to be created
    // await Promise.all(projectSubcategoryPromises);
}



        return res.status(201).json({
            message: 'Project created successfully',
            data: project,
            status: 'success',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'An error occurred while creating the project',
            error: error.message,
            status: 'error',
        });
    }
};


const getAllProject = async (req, res) => {
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

const getProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await SmallProject.findByPk(id);
        if (!project) {
            return res.status(404).json({
                message: 'Project not found',
                status: 'error',
            });
        }
        res.status(200).json({
            message: 'Fetched project successfully',
            data: project,
            status: 'success',
        });
    } catch (error) {
        console.error(error);
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

        const project = await SmallProject.findByPk(id);

        if (!project) {
            return res.status(404).json({
                message: 'Project not found',
                status: 'error',
            });
        }

        // Update the project
        await project.update({
            name,
            typeOfProject,
            categoryId: JSON.stringify(categoryId),
            subcategoryId: JSON.stringify(subcategoryId),
            projectmanageroleId: JSON.stringify(projectmanageroleId),
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

module.exports = {
    createProject,
    getAllProject,
    getProjectById,
    updateProject,
    deleteProject,
};
