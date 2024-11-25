/**
 * @swagger
 * tags:
 *   name: Offers
 *   description: API for managing job offers.
 */

/**
 * @swagger
 * /api/v1/offer/create:
 *   post:
 *     summary: Create a new offer
 *     tags: [Offers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               job:
 *                 type: integer
 *                 description: ID of the job being offered.
 *               offeredBy:
 *                 type: integer
 *                 description: ID of the user offering the job.
 *               offerDetails:
 *                 type: string
 *                 description: Details of the offer.
 *     responses:
 *       201:
 *         description: Offer created successfully.
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Server error.
 */

/**

 * @swagger
 * /api/v1/offer/{offerId}:
 *   get:
 *     summary: Get offer by ID
 *     tags: [Offers]
 *     parameters:
 *       - in: path
 *         name: offerId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the offer to retrieve.
 *     responses:
 *       200:
 *         description: Offer details retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Offer details retrieved successfully."
 *                 offer:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The unique ID of the offer.
 *                     job:
 *                       type: object
 *                       description: The job associated with the offer.
 *                     offeredBy:
 *                       type: object
 *                       description: The user who made the offer.
 *                     offerDetails:
 *                       type: string
 *                       description: Detailed description of the offer.
 *                     status:
 *                       type: string
 *                       enum: [Pending, Accepted, Rejected]
 *                       description: The current status of the offer.
 *       400:
 *         description: Offer ID is required.
 *       404:
 *         description: Offer not found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/v1/offer:
 *   get:
 *     summary: Get all offers
 *     tags: [Offers]
 *     responses:
 *       200:
 *         description: List of all offers.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /api/v1/offer/{offerId}:
 *   put:
 *     summary: Update an offer by ID
 *     tags: [Offers]
 *     parameters:
 *       - in: path
 *         name: offerId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the offer to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               offerDetails:
 *                 type: string
 *                 description: Updated details of the offer.
 *               status:
 *                 type: string
 *                 enum: [Pending, Accepted, Rejected]
 *                 description: Updated status of the offer.
 *     responses:
 *       200:
 *         description: Offer updated successfully.
 *       404:
 *         description: Offer not found.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /api/v1/offer/{offerId}:
 *   delete:
 *     summary: Delete an offer by ID
 *     tags: [Offers]
 *     parameters:
 *       - in: path
 *         name: offerId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the offer to delete.
 *     responses:
 *       200:
 *         description: Offer deleted successfully.
 *       404:
 *         description: Offer not found.
 *       500:
 *         description: Server error.
 */
