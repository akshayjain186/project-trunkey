//Register Swagger API
/**
 * @swagger
 * /api/v1/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               userName:
 *                 type: string
 *               dob:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               language:
 *                 type: string
 *               country:
 *                 type: string
 *               phone:
 *                 type: string
 *               roleName:
 *                 type: string
 *               address:
 *                 type: string
 *               countryCode:
 *                 type: string
 *     responses:
 *       201:
 *         description: User account created successfully
 *       400:
 *         description: Bad request, email already exists or other validation error
 *       500:
 *         description: Server error, role not found
 */

/**
 * @swagger
 * /api/v1/users/login:
 *   post:
 *     summary: Login with Phone or Email
 *     description: Allows users to log in using their phone number or email address along with a password.
 *     operationId: login
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: 'user@example.com' # Provide email address
 *               password:
 *                 type: string
 *                 example: 'yourPassword123'
 *     responses:
 *       '200':
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: 'eyJhbGciOiJIUzI1NiIsInR...'
 *                 message:
 *                   type: string
 *                   example: 'Login successful'
 *       '400':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Invalid credentials'
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Error message details'
 */
