/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       required:
 *         - _id
 *         - title
 *         - description
 *         - category
 *       properties:
 *         _id:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         category:
 *           type: string
 *           enum: 
 *             - article
 *             - achievement
 *             - event
 *             - heading
 *             - history 
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the article was created
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the article was updated
 *       example:
 *         _id: 65db862aa4204ee88a932fa8
 *         title: HMIF Menang
 *         description: HMIF menang lagi
 *         category: achievement
 *         createdAt: 2024-02-25T18:25:46.909+00:00
 *         updatedAt: 2024-02-26T11:16:13.925+00:00
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * tags:
 *   name: Article
 *   description: The API for managing article
*/

/**
 * @swagger
 * /articles:
 *   get:
 *     summary: Get all articles
 *     tags: [Article]
 *     parameters:
 *       - in: header
 *         name: ngrok-skip-browser-warning
 *         schema:
 *           type: string
 *         description: Required header when using Ngrok server
 *     responses:
 *       200:
 *         description: Success get all articles
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *             example:
 *               message: "Get data successfully"
 *               content:
 *                 _id: 65db862aa4204ee88a932fa8
 *                 title: HObjectId Menang
 *                 description: HMIF menang lagi
 *                 category: achievement
 *                 createdAt: 2024-02-25T18:25:46.909+00:00
 *                 updatedAt: 2024-02-26T11:16:13.925+00:00
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             examples:
 *               errorExample:
 *                 summary: Internal Server Error
 *                 value:
 *                   message: "Internal server error occurred."
 *   post:
 *     summary: Create a new article
 *     description: Only admin has access to create an article, input bearer token on key logo at top right this bar!
 *     tags: [Article]
 *     security:
 *       - BearerAuth: [] 
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
 *               - title
 *               - description
 *               - category
 *             properties:
 *               _id:
 *                 type: string
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *                 enum: ["achievement", "article", "event", "heading", "history"]
 *             example:
 *               title: HMIF Menang
 *               description: HMIF menang lagi
 *               category: achievement
 *     x-codeSamples:
 *       - lang: "JavaScript"
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
 *     responses:
 *       201:
 *         description: Success created article
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *             example:
 *               message: "Data created successfully"
 *               content:
 *                 _id: 65db862aa4204ee88a932fa8
 *                 title: HMIF Menang
 *                 description: HMIF menang lagi
 *                 category: achievement
 *                 createdAt: 2024-02-25T18:25:46.909+00:00
 *                 updatedAt: 2024-02-26T11:16:13.925+00:00
 *       401:
 *         description: Unauthorized for admin access
 *         content:
 *           application/json:
 *             examples:
 *               errorExample:
 *                 summary: Request is not from admin
 *                 value:
 *                   message: "Unauthorized for admin access"
 *               errorExpiredToken:
 *                 summary: Expired token
 *                 value:
 *                   message: "Token has expired"
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             examples:
 *               errorTokenHeader:
 *                 summary: Invalid token
 *                 value:
 *                   message: "Invalid token"
 *               errorTokenSignature:
 *                 summary: Invalid signature
 *                 value:
 *                   message: "Invalid signature"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             examples:
 *               errorInvalidCategory:
 *                 summary: Invalid Category
 *                 value:
 *                   message: "Article validation failed: category: `achievements` is not a valid enum value for path `category`."
 *               errorExample:
 *                 summary: Internal Server Error
 *                 value:
 *                   message: "Internal server error occurred."
 */

/**
 * @swagger
 * /articles?category={category}:
 *   get:
 *     summary: Get articles by category
 *     tags: [Article]
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *           enum: ["achievement", "article", "event", "heading", "history"]
 *         description: The category of articles to retrieve
 *       - in: header
 *         name: ngrok-skip-browser-warning
 *         schema:
 *           type: string
 *         description: Required header when using Ngrok server
 *     responses:
 *       200:
 *         description: Success get articles by category
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *             example:
 *               message: "Get data successfully"
 *               content:
 *                 _id: 65dc56bcc3327bde5485afd8
 *                 title: Himpunan terbaik
 *                 description: HMIF mendapatkan penghargaan himpunan terbaik pada FMIPA Awards
 *                 category: achievement
 *                 createdAt: 2024-02-26T09:15:40.235Z   
 *                 updatedAt: 2024-02-26T09:15:40.235Z
 * 
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             examples:
 *               errorExample:
 *                 summary: Invalid Category
 *                 value:
 *                   message: "Category is not available for the article model."
 *                   detail: "Category on query url is not available for enum value type"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             examples:
 *               errorExample:
 *                 summary: Internal Server Error
 *                 value:
 *                   message: "Internal server error occurred."
 *
 */

/**
 * @swagger
 * /articles/{id}:
 *   get:
 *     summary: Get article by id
 *     tags: [Article]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The id of article to retrieve
 *       - in: header
 *         name: ngrok-skip-browser-warning
 *         schema:
 *           type: string
 *         description: Required header when using Ngrok server
 *     responses:
 *       200:
 *         description: Success get article by id.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *             example:
 *               message: "Get data successfully"
 *               content:
 *                 _id: 65dc56bcc3327bde5485afd8
 *                 title: Himpunan terbaik
 *                 description: HMIF mendapatkan penghargaan himpunan terbaik pada FMIPA Awards
 *                 category: achievement
 *                 createdAt: 2024-02-26T09:15:40.235Z   
 *                 updatedAt: 2024-02-26T09:15:40.235Z
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             examples:
 *               errorExample:
 *                 summary: Article not found
 *                 value:
 *                   message: "Article Not Found"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             examples:
 *               errorCastingObjectId:
 *                 summary: Cast to ObjectId failed
 *                 value:
 *                   message: "Cast to ObjectId failed for value \"{id}\" (type string) at path \"_id\" for model \"Article\""
 *                   detail: "{id} on endpoint is not ObjectId"
 *               errorExample:
 *                 summary: Internal Server Error
 *                 value:
 *                   message: "Internal server error occurred."
 *   patch:
 *     summary: Update article by id
 *     description: Only admin has access to update an article, input bearer token on key logo at top right this bar!
 *     tags: [Article]
 *     security:
 *       - BearerAuth: [] 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The id of article to update
 *       - in: header
 *         name: ngrok-skip-browser-warning
 *         schema:
 *           type: string
 *         description: Required header when using Ngrok server
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *                 enum: ["achievement", "article", "event", "heading", "history"]
 *             example:
 *               title: HMIF Menang
 *               description: HMIF menang lagi
 *               category: achievement
 *     responses:
 *       200:
 *         description: Success update article by id.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *             example:
 *               message: "Data updated successfully"
 *               content:
 *                 _id: 65dc56bcc3327bde5485afd8
 *                 title: Himpunan terbaik
 *                 description: HMIF mendapatkan penghargaan himpunan terbaik pada FMIPA Awards
 *                 category: achievement
 *                 createdAt: 2024-02-26T09:15:40.235Z   
 *                 updatedAt: 2024-02-26T09:15:40.235Z
 *       401:
 *         description: Unauthorized for admin access
 *         content:
 *           application/json:
 *             examples:
 *               errorExample:
 *                 summary: Request is not from admin
 *                 value:
 *                   message: "Unauthorized for admin access"
 *               errorExpiredToken:
 *                 summary: Expired token
 *                 value:
 *                   message: "Token has expired"
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             examples:
 *               errorTokenHeader:
 *                 summary: Invalid token
 *                 value:
 *                   message: "Invalid token"
 *               errorTokenSignature:
 *                 summary: Invalid signature
 *                 value:
 *                   message: "Invalid signature"
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             examples:
 *               errorExample:
 *                 summary: Article not found
 *                 value:
 *                   message: "Article Not Found"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             examples:
 *               errorCastingObjectId:
 *                 summary: Cast to ObjectId failed
 *                 value:
 *                   message: "Cast to ObjectId failed for value \"{id}\" (type string) at path \"_id\" for model \"Article\""
 *                   detail: "{id} on endpoint is not ObjectId"
 *               errorExample:
 *                 summary: Internal Server Error
 *                 value:
 *                   message: "Internal server error occurred."
 *               errorInvalidCategory:
 *                 summary: Invalid Category
 *                 value:
 *                   message: "Article validation failed: category: `achievements` is not a valid enum value for path `category`."
 *                   detail: "Category on request body is not available for enum value type"
 *   delete:
 *     summary: Delete articles by id
 *     tags: [Article]
 *     security:
 *       - BearerAuth: [] 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The id of article to delete
 *       - in: header
 *         name: ngrok-skip-browser-warning
 *         schema:
 *           type: string
 *         description: Required header when using Ngrok server
 *     responses:
 *       200:
 *         description: Success delete article by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *             example:
 *               message: "Data deleted successfully"
 *               content:
 *                 _id: 65dc56bcc3327bde5485afd8
 *                 title: Himpunan terbaik
 *                 description: HMIF mendapatkan penghargaan himpunan terbaik pada FMIPA Awards
 *                 category: achievement
 *                 createdAt: 2024-02-26T09:15:40.235Z   
 *                 updatedAt: 2024-02-26T09:15:40.235Z
 *       401:
 *         description: Unauthorized for admin access
 *         content:
 *           application/json:
 *             examples:
 *               errorExample:
 *                 summary: Request is not from admin
 *                 value:
 *                   message: "Unauthorized for admin access"
 *               errorExpiredToken:
 *                 summary: Expired token
 *                 value:
 *                   message: "Token has expired"
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             examples:
 *               errorTokenHeader:
 *                 summary: Invalid token
 *                 value:
 *                   message: "Invalid token"
 *               errorTokenSignature:
 *                 summary: Invalid signature
 *                 value:
 *                   message: "Invalid signature"
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             examples:
 *               errorExample:
 *                 summary: Article not found
 *                 value:
 *                   message: "Article Not Found"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             examples:
 *               errorCastingObjectId:
 *                 summary: Cast to ObjectId failed
 *                 value:
 *                   message: "Cast to ObjectId failed for value \"{id}\" (type string) at path \"_id\" for model \"Article\""
 *                   detail: "{id} on endpoint is not ObjectId"
 *               errorExample:
 *                 summary: Internal Server Error
 *                 value:
 *                   message: "Internal server error occurred."
 */