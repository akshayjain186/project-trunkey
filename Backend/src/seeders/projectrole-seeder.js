const projectmanagerole = require("../model/Projectmanagerole");

const projectManageRole = [
    {
        name: 'ProjectManager',
        machineName: 'project_manager',
        description: 'Role responsible for overseeing the project, ensuring its timely completion.',
        permissions: JSON.stringify({
            manageProjects: true,
            allocateResources: true,
            approveBudgets: true,
            overseeProgress: true,
            communicateWithStakeholders: true,
        }),
    },
    {
        name: 'Appraiser',
        machineName: 'appraiser',
        description: 'Responsible for evaluating the project’s value and quality.',
        permissions: JSON.stringify({
            evaluateProjects: true,
            provideFeedback: true,
            assistInDecisionMaking: true,
            approveQuality: true,
        }),
    },
    {
        name: 'Builder',
        machineName: 'builder',
        description: 'The role of the builder is to construct the project according to the provided plan and specifications.',
        permissions: JSON.stringify({
            manageConstruction: true,
            ensureCompliance: true,
            overseeTeam: true,
            reportProgress: true,
        }),
    },
    {
        name: 'InteriorDesigner',
        machineName: 'interior_designer',
        description: 'Designs the interior spaces of the project according to client specifications and aesthetic considerations.',
        permissions: JSON.stringify({
            designInteriors: true,
            selectMaterials: true,
            collaborateWithArchitects: true,
            overseeInteriorProgress: true,
        }),
    },
];

// console.log(projectManageRole);
const seedProjectManageRole = async () => {
    try {
        for (const projectmanageroleData of projectManageRole) {
            // Use findOrCreate to avoid duplicates
            await projectmanagerole.findOrCreate({
                where: { machineName: projectmanageroleData.machineName },
                defaults: projectmanageroleData, // Insert if not found
            });
        }
        console.log('Project Manage Roles seeded successfully');
    } catch (err) {
        console.error('Error seeding project manager roles:', err);
    }
};

module.exports = seedProjectManageRole;