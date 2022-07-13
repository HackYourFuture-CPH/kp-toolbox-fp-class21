const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const toolsController = require('../controllers/tools.controller');

/**
 * @swagger
 * tags:
 *    name: Tools
 *    description: Toolbox API
 */

/**
 * @swagger
 * /tools:
 *  get:
 *    tags: [Tools]
 *    summary: Return the list of all or filtered tools
 *    description:
 *      Will return all or filtered tools.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/', (req, res, next) => {
  toolsController
    .getTools(req.query)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /tools/{id}:
 *  get:
 *    tags: [Tools]
 *    summary: Get a single tool by id
 *    description:
 *      Will return a single tool with a matching id.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: integer
 *         required: true
 *         description: The tool id
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/:id', (req, res, next) => {
  toolsController
    .getToolById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
