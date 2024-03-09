/**
 * @swagger
 * components:
 *   schemas:
 *     Media:
 *       type: object
 *       required:
 *         - _id
 *         - mediaType
 *         - mediaUrl
 *         - articleId
 *       properties:
 *         _id:
 *           type: string
 *         mediaType:
 *           type: string
 *           enum:
 *             - image
 *             - video  
 *         mediaUrl:
 *           type: string
 *         articleId:
 *           type: string 
 *           description: This articleId is from attribute _id on article schema
 *       example:
 *         _id: 65deffe621acfa3b46140c12
 *         mediaType: image
 *         mediaUrl: media.png
 *         articleId: 65dc08b127c4f5f73f579a23
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 */

/**
 * @swagger
 * tags:
 *   name: Media
 *   description: The API for managing media
*/

/**
 * @swagger
 * /media:
 *   post:
 *     summary: Create a new media
 *     description: Only admin has access to create an media, input bearer token on key logo at top right this bar!
 *     tags: [Media]
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
 *               - mediaType
 *               - mediaUrl
 *               - articleId
 *             properties:
 *               _id:
 *                 type: string
 *               mediaType:
 *                 type: string
 *               mediaUrl:
 *                 type: string
 *                 enum: ["image", "video"]
 *               articleId:
 *                 type: string
 *                 description: This articleId is from attribute _id on article schema
 *             example:
 *               mediaType: image
 *               mediaUrl: foto-hmif-events.png
 *               articleId: 65dc5e06c3327bde5485afde
 *     responses:
 *       201:
 *         description: Success created media
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Media'
 *             example:
 *               message: "Data created successfully"
 *               content:
 *                 _id: 65deffe621acfa3b46140c12
 *                 mediaType: image
 *                 mediaUrl: foto-hmif-events.png
 *                 articleId: 65dc5e06c3327bde5485afde
 *                 createdAt: 2024-02-28T09:41:58.428+00:00
 *                 updatedAt: 2024-02-28T09:41:58.428+00:00
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
 *               errorInvalidMediaType:
 *                 summary: Invalid mediaType on request body
 *                 value:
 *                   message: "Media validation failed: mediaType: `photo` is not a valid enum value for path `mediaType`."
 *               errorExample:
 *                 summary: Internal Server Error
 *                 value:
 *                   message: "Internal server error occurred."
 */

/**
 * @swagger
 * /media/{articleId}:
 *   get:
 *     summary: Get media by articleId
 *     description: Get media that displays information for a particular article
 *     tags: [Media]
 *     parameters:
 *       - in: path
 *         name: articleId
 *         required: true
 *         schema:
 *           type: string
 *         description: The id of article to get media
 *       - in: header
 *         name: ngrok-skip-browser-warning
 *         schema:
 *           type: string
 *         description: Required header when using Ngrok server
 *     responses:
 *       200:
 *         description: Success get media by articleId
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Media'
 *             example:
 *               message: "Get data successfully"
 *               content:
 *                 _id: 65deffe621acfa3b46140c12
 *                 mediaType: image
 *                 mediaUrl: foto-hmif-events.png
 *                 articleId: 65dc5e06c3327bde5485afde
 *                 createdAt: 2024-02-28T09:41:58.428+00:00
 *                 updatedAt: 2024-02-28T09:41:58.428+00:00
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             examples:
 *               errorExample:
 *                 summary: Media not found
 *                 value:
 *                   message: "Media Not Found"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             examples:
 *               errorCastingObjectId:
 *                 summary: Cast to ObjectId failed
 *                 value:
 *                   message: "Cast to ObjectId failed for value \"{articleId}\" (type string) at path \"articleId\" for model \"Media\""
 *                   detail: "{id} on endpoint is not ObjectId"
 *               errorExample:
 *                 summary: Internal Server Error
 *                 value:
 *                   message: "Internal server error occurred."
 */

