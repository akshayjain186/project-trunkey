/**
 * @swagger
 * tags:
 *   name: AcceptedJobs
 *   description: API for managing accepted jobs.
 */

/**
 * @swagger
 * /api/v1/acceptedJobs/create:
 *   post:
 *     summary: Create a new accepted job
 *     tags: [AcceptedJobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               jobId:
 *                 type: integer
 *                 description: ID of the job being accepted.
 *               offerId:
 *                 type: integer
 *                 description: ID of the related offer (optional).
 *               acceptedBy:
 *                 type: integer
 *                 description: ID of the user accepting the job.
 *               remarks:
 *                 type: string
 *                 description: Remarks about the job acceptance.
 *     responses:
 *       201:
 *         description: Accepted job created successfully.
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /api/v1/acceptedJobs/{id}:
 *   get:
 *     summary: Get an accepted job by ID
 *     tags: [AcceptedJobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The accepted job ID.
 *     responses:
 *       200:
 *         description: Accepted job details.
 *       404:
 *         description: Job not found.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /api/v1/acceptedJobs:
 *   get:
 *     summary: Get all accepted jobs
 *     tags: [AcceptedJobs]
 *     responses:
 *       200:
 *         description: List of accepted jobs.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /api/v1/acceptedJobs/{id}:
 *   put:
 *     summary: Update an accepted job by ID
 *     tags: [AcceptedJobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The accepted job ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [Accepted, In Progress, Completed, Cancelled]
 *                 description: Status of the job.
 *               remarks:
 *                 type: string
 *                 description: Remarks for the update.
 *     responses:
 *       200:
 *         description: Accepted job updated successfully.
 *       404:
 *         description: Job not found.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /api/v1/acceptedJobs/{id}:
 *   delete:
 *     summary: Delete an accepted job by ID
 *     tags: [AcceptedJobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The accepted job ID.
 *     responses:
 *       200:
 *         description: Accepted job deleted successfully.
 *       404:
 *         description: Job not found.
 *       500:
 *         description: Server error.
 */
