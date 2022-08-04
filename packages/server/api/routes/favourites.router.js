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
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error
 */

router.post('/', (req, res, next) => {
  favouritesController
    .postFavorites(req.body)
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
 *      - in: body
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
    .getAllUsersFavourites(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
