const express = require('express');
const router = express.Router({ mergeParams: true });
const favouritesController = require('../controllers/favourites.controller');

/**
 * @swagger
 * tags:
 *    name: Tools
 *    description: Toolbox API
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
 * /api/favorites:
 *  get:
 *    tags: [Favourites]
 *    summary: Get all favourite tools
 *    description:
 *      Will return all favourite tools
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error
 */

router.get('/', (req, res, next) => {
  favouritesController
    .getAllFavourites()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
