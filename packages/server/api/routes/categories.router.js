const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const categoriesController = require('../controllers/categories.controller');

/**
 * @swagger
 * /categories:
 *  get:
 *    tags:
 *    - categories
 *    summary: Get all categories
 *    description:
 *      Will return all categories.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  categoriesController
    .getCategories()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /categories/{ID}:
 *  get:
 *    tags:
 *    - categories
 *    summary: Get categories by ID
 *    description:
 *      Will return single categories with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the categories to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  categoriesController
    .getCategoriesById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /categories:
 *  post:
 *    tags:
 *    - categories
 *    summary: Create a categories
 *    description:
 *      Will create a categories.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: categories
 *        description: The categories to create.
 *        schema:
 *          type: object
 *          required:
 *            - title
 *          properties:
 *            title:
 *              type: string
 *    responses:
 *      201:
 *        description: categories created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  categoriesController
    .createCategories(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);

      res.status(400).send('Bad request').end();
    });
});

/**
 * @swagger
 * /categories/{ID}:
 *  patch:
 *    tags:
 *    - categories
 *    summary: Create an categories
 *    description:
 *      Will create an categories.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the categories to patch.
 *      - in: body
 *        name: categories
 *        description: The categories to create.
 *        schema:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *    responses:
 *      200:
 *        description: categories was patched
 *      5XX:
 *        description: Unexpected error.
 */
router.patch('/:id', (req, res, next) => {
  categoriesController
    .editCategories(req.params.id, req.body)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /categories/{ID}:
 *  delete:
 *    tags:
 *    - categories
 *    summary: Delete an categories
 *    description:
 *      Will delete a categories with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the categories to delete.
 *    responses:
 *      200:
 *        description: categories deleted
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:id', (req, res) => {
  categoriesController
    .deleteCategories(req.params.id, req)
    .then((result) => {
      // If result is equal to 0, then that means the categories id does not exist
      if (result === 0) {
        res.status(404).send('The categories ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));
});

module.exports = router;
