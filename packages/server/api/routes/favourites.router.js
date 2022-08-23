const express = require('express');

const router = express.Router({ mergeParams: true });
const favouritesController = require('../controllers/favourites.controller');

/**
 * @swagger
 * tags:
 *    name: Favourites
 *    description: Favourites API
 */

/**
 * @swagger
 * /api/favorites:
 *  post:
 *    tags: [Favourites]
 *    summary: Add favourite tools
 *    description:
 *      Will add tool to favourite table
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: tool_id
 *        schema:
 *           type: integer
 *           required: true
 *           description: The tool id
 *      - in: req.user.uid
 *        name: user_id
 *        schema:
 *           type: string
 *           required: true
 *           description: The user id
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error
 */

router.post('/', (req, res, next) => {
  favouritesController
    .postFavorites(req.user.uid, req.body.toolId)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /favourites/{id}:
 *   get:
 *     tags: [Favourites]
 *     summary: Get all users favourite tools
 *     description:
 *       Will return all favourite tools with matching user_id
 *     produces: application/json
 *     parameters:
 *      - in: params
 *        name: id
 *        schema:
 *           type: integer
 *           required: true
 *           description: The user id
 *     responses:
 *       200:
 *         description: Successful request
 *       5XX:
 *         description: Unexpected error
 */

router.get('/:id', (req, res, next) => {
  favouritesController
    .getAllUsersFavourites(req.user.uid)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /favourites:
 *   delete:
 *     tags: [Favourites]
 *     summary: Delete favourite tool for user
 *     description:
 *       Will delete favourite tool with matching user_id
 *     produces: application/json
 *     parameters:
 *      - in: body
 *        name: tool_id
 *        schema:
 *           type: integer
 *           required: true
 *           description: The tool id
 *      - in: req.user.uid
 *        name: user_id
 *        schema:
 *           type: string
 *           required: true
 *           description: The user id
 *     responses:
 *       200:
 *         description: Successful request
 *       5XX:
 *         description: Unexpected error
 */

router.delete('/', (req, res, next) => {
  favouritesController
    .deleteFavourites(req.body)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
