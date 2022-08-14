const express = require('express');

const router = express.Router({ mergeParams: true });

const toolsController = require('../controllers/tools.controller');

/**
 * @swagger
 * /tools:
 *  post:
 *    tags:
 *    - tools
 *    summary: Create a tool
 *    description:
 *      Will create a tool.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: tools
 *        description: The tool to create.
 *        schema:
 *          type: object
 *          required:
 *            - title
 *          properties:
 *            title:
 *              type: string
 *    responses:
 *      201:
 *        description: tool created
 *      5XX:
 *        description: Unexpected error.
 */

router.post('/', (req, res) => {
  toolsController
    .createTool(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);

      res.status(400).send('Bad request').end();
    });
});

router.put('/:id', (req, res) => {
  toolsController
    .updateToolById(req.params.id, req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(400).send('Bad request').end();
    });
});

router.delete('/:id', (req, res) => {
  toolsController
    .deleteToolById(req.params.id)
    .then((result) => res.json(result))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(400).send('Bad request').end();
    });
});

module.exports = router;
