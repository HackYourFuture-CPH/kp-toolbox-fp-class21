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
 *    summary: Return the list of all tools
 *    description:
 *      Will return all tools.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/', (req, res, next) => {
  toolsController
    .getTools()
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

/**
 * @swagger
 * /exampleResources:
 *  post:
 *    tags:
 *    - exampleResources
 *    summary: Create a exampleResource
 *    description:
 *      Will create a exampleResource.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: exampleResource
 *        description: The exampleResource to create.
 *        schema:
 *          type: object
 *          required:
 *            - title
 *          properties:
 *            title:
 *              type: string
 *    responses:
 *      201:
 *        description: ExampleResources created
 *      5XX:
 *        description: Unexpected error.
 */

router.post('/', (req, res) => {
  toolsController
    .createNewTool(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);

      res.status(400).send('Bad request').end();
    });
});

module.exports = router;
