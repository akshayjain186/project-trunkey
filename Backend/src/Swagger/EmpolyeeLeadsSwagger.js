/**
 * @swagger
 * tags:
 *   name: Employee_Leads
 *   description: API to manage employee leads
 */

/**
 * @swagger
 * /api/v1/empolyeeleads/add:
 *   post:
 *     summary: Create a new lead
 *     tags: [Employee_Leads]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - surname
 *               - email
 *               - leadSource
 *             properties:
 *               name:
 *                 type: string
 *               surname:
 *                 type: string
 *               email:
 *                 type: string
 *               address:
 *                 type: string
 *               city:
 *                 type: string
 *               postalCode:
 *                 type: string
 *               mobilePhone:
 *                 type: string
 *               typeOfHome:
 *                 type: string
 *               leadSource:
 *                 type: string
 *               comment:
 *                 type: string
 *     responses:
 *       201:
 *         description: Lead created successfully
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/v1/empolyeeleads/{id}:
 *   get:
 *     summary: Get lead by ID
 *     tags: [Employee_Leads]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Lead ID
 *     responses:
 *       200:
 *         description: Lead found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 surname:
 *                   type: string
 *                 email:
 *                   type: string
 *       404:
 *         description: Lead not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/v1/empolyeeleads/{id}:
 *   put:
 *     summary: Update lead by ID
 *     tags: [Employee_Leads]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Lead ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               surname:
 *                 type: string
 *               email:
 *                 type: string
 *               address:
 *                 type: string
 *               city:
 *                 type: string
 *               postalCode:
 *                 type: string
 *               mobilePhone:
 *                 type: string
 *               typeOfHome:
 *                 type: string
 *               leadSource:
 *                 type: string
 *               comment:
 *                 type: string
 *     responses:
 *       200:
 *         description: Lead updated successfully
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Lead not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/v1/empolyeeleads/{id}:
 *   delete:
 *     summary: Delete a lead by ID
 *     tags: [Employee_Leads]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Lead ID
 *     responses:
 *       200:
 *         description: Lead deleted successfully
 *       404:
 *         description: Lead not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/v1/empolyeeleads:
 *   get:
 *     summary: Get all leads
 *     tags: [Employee_Leads]
 *     responses:
 *       200:
 *         description: List of all leads
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   surname:
 *                     type: string
 *                   email:
 *                     type: string
 *       500:
 *         description: Internal Server Error
 */
