/**
 * @swagger
 * /api/v1/role:
 *   get:
 *     summary: Get all roles
 *     tags: [Roles]
 *     responses:
 *       '200':
 *         description: A list of roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The ID of the role.
 *                   name:
 *                     type: string
 *                     description: The name of the role.
 *                   permissions:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: List of permissions associated with the role.
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message for server errors.
 */

/**
 * @swagger
 * /api/v1/role/{id}:
 *   put:
 *     summary: Update a role by ID
 *     tags: [Roles]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the role to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The new name of the role.
 *               permissions:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: List of permissions for the role. If name is updated, permissions will be derived from it.
 *     responses:
 *       '200':
 *         description: The updated role
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The ID of the updated role.
 *                 name:
 *                   type: string
 *                   description: The updated name of the role.
 *                 permissions:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: List of permissions associated with the updated role.
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message for bad requests.
 *       '404':
 *         description: Role not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message when the role is not found.
 */

/**
 * @swagger
 * /api/v1/role/{id}:
 *   delete:
 *     summary: Delete a role by ID
 *     tags: [Roles]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the role to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Role deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message confirming deletion.
 *       '404':
 *         description: Role not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message when the role is not found.
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message for internal server errors.
 */
