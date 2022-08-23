const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const contactUsFormController = require('../controllers/contactUsForm.controller');

/**
 * @swagger
 * tags:
 *    name: ContactUsForm
 *    description: ContactUs API
 */

/**
 * @swagger
 * /contactUsForm:
 *  post:
 *    tags: [ContactUsForm]
 *    summary: Create a user_enquiry
 *    description:
 *      Will create a user_enquiry.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: [user_enquiry]
 *        description: The [user_enquiry to create.
 *        schema:
 *          type: object
 *          required:
 *            - first name
 *            - email
 *            - message
 *          properties:
 *            first_name:
 *              type: string
 *            surname:
 *              type: string
 *            email:
 *              type: string
 *            message:
 *              type: string
 *    responses:
 *      201:
 *        description: ExampleResources created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  contactUsFormController
    .addDataFromContactForm(req.body)
    .then((result) => res.json(result))
    .catch(() => {
      res.status(400).send('Bad request').end();
    });
});

module.exports = router;
