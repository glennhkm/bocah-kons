/**
 * @swagger
 * components:
 *   schemas:
 *     Admin:
 *       type: object
 *       required:
 *         - _id
 *         - username
 *         - password
 *       properties:
 *         _id:
 *           type: string
 *         username:
 *           type: string
 *         password:
 *           type: string
 *           description: Password will be hashed automatically 
 *       example:
 *         _id: 65dd25bbcb74df6ae68cfbc7
 *         username: glennhkm
 *         password: 26July04
 */

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: The API for admin login
*/

/**
 * @swagger
 * /admin/login:
 *   post:
 *     summary: Admin login endpoint
 *     tags: [Admin]
 *     parameters:
 *       - in: header
 *         name: ngrok-skip-browser-warning
 *         schema:
 *           type: string
 *         description: Required header when using Ngrok server
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               _id:
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               username: glennhkm
 *               password: 26July04
 *     responses:
 *       200:
 *         description: Successfully login
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *             example:
 *               message: "Data created successfully"
 *               token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGQyNWJiY2I3NGRmNmFlNjhjZmJjNyIsInVzZXJuYW1lIjoiZ2xlbm5oa20iLCJpYXQiOjE3MDkxMDg4Mjh9.sNe782CRd_pqnqJxmGTFDYj0GsBWf4a4derhUyYSPFg"
 *       401:   
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             examples:
 *               errorExample:
 *                 summary: Password do not match
 *                 value:
 *                   message: "Invalid credentials"
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             examples:
 *               errorExample:
 *                 summary: Username is not available
 *                 value:
 *                   message: "Admin Not Found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             examples:
 *               errorExample:
 *                 summary: Internal Server Error
 *                 value:
 *                   message: "Internal server error occurred."
 *     x-codeSamples:
 *       - lang: javascript
 *         source: |
 *           const axios = require('axios');
 *           const axios = require('axios');
 *
 *           const articleData = {
 *             title: 'HMIF Menang',
 *             description: 'HMIF menang lagi',
 *             category: 'achievement'
 *           };
 *
 *           const headers = {
 *             'Authorization': 'Bearer yourBearerToken',
 *             'Content-Type': 'application/json'
 *           };
 *
 *           axios.post('http://your-api-endpoint/articles', articleData, { headers })
 *             .then(response => {
 *               console.log('Response:', response.data);
 *             })
 *             .catch(error => {
 *               console.error('Error:', error.response ? error.response.data : error.message);
 *             });   
 */