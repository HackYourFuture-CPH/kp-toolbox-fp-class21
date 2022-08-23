const express = require('express');

const router = express.Router({ mergeParams: true });

const usersController = require('../controllers/users.controller');

/**
 * @swagger
 * tags:
 *    name: Users
 *    description: Users API
 */

/**
 * @swagger
 * /api/users:
 *  post:
 *    tags: [Users]
 *    summary: Add user
 *    description:
 *      Will add user to users table
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: firebase_id
 *        schema:
 *           type: string
 *           required: true
 *           description: The users firebase id
 *      - in: body
 *        name: name
 *        schema:
 *           type: string
 *           required: true
 *           description: The users name
 *      - in: body
 *        name: email
 *        schema:
 *           type: string
 *           required: true
 *           description: The users email
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error
 */
router.post('/', (req, res, next) => {
  usersController
    .postUser(req.body)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /users/{firebaseId}:
 *   get:
 *     tags: [Users]
 *     summary: Get user by firebaseId
 *     description:
 *       Will return user  with matching firebaseId
 *     produces: application/json
 *     parameters:
 *      - in: params
 *        name: firebaseId
 *        schema:
 *           type: string
 *           required: true
 *           description: The users firebaseId
 *     responses:
 *       200:
 *         description: Successful request
 *       5XX:
 *         description: Unexpected error
 */

router.get('/:firebaseId', (req, res, next) => {
  usersController
    .getUserByFireBaseId(req.params.firebaseId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
