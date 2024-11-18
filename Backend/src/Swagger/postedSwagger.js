/**
 * @swagger
 * tags:
 *   name: Jobs
 *   description: API for managing jobs
 */

/**
 * @swagger
 * /api/v1/jobs/add:
 *   post:
 *     summary: Create a new job
 *     tags: [Jobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *                 description: ID of the user posting the job.
 *               address:
 *                 type: string
 *                 description: Address of the job location.
 *               city:
 *                 type: string
 *                 description: City of the job location.
 *               state:
 *                 type: string
 *                 description: State of the job location.
 *               country:
 *                 type: string
 *                 description: Country of the job location.
 *               latitude:
 *                 type: string
 *                 description: Latitude of the job location.
 *               longitude:
 *                 type: string
 *                 description: Longitude of the job location.
 *               jobDescription:
 *                 type: string
 *                 description: Description of the job.
 *               status:
 *                 type: string
 *                 enum: [posted, accepted, completed]
 *                 default: posted
 *                 description: Status of the job.
 *     responses:
 *       201:
 *         description: Job created successfully.
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /api/v1/jobs/fetch:
 *   get:
 *     summary: Get all jobs
 *     tags: [Jobs]
 *     responses:
 *       200:
 *         description: List of jobs.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Job'
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /api/v1/jobs/{id}:
 *   get:
 *     summary: Get a job by ID
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The job ID.
 *     responses:
 *       200:
 *         description: Job details.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Job'
 *       404:
 *         description: Job not found.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /api/v1/jobs/{id}:
 *   put:
 *     summary: Update a job by ID
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The job ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               address:
 *                 type: string
 *               city:
 *                 type: string
 *               state:
 *                 type: string
 *               country:
 *                 type: string
 *               latitude:
 *                 type: string
 *               longitude:
 *                 type: string
 *               jobDescription:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [posted, accepted, completed]
 *     responses:
 *       200:
 *         description: Job updated successfully.
 *       404:
 *         description: Job not found.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /api/v1/jobs/{id}:
 *   delete:
 *     summary: Delete a job by ID
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The job ID.
 *     responses:
 *       200:
 *         description: Job deleted successfully.
 *       404:
 *         description: Job not found.
 *       500:
 *         description: Server error.
 */
