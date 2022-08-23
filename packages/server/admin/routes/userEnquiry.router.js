const express = require('express');

const router = express.Router({ mergeParams: true });

// controller
const userEnquiryController = require('../controllers/userEnquiry.controller');

/**
 * @swagger
 * tags:
 *    name: ContactUsForm
 *    description: ContactUs API
 */

/**
 * @swagger
 * /contactUsForm:
 *  get:
 *    tags: [ContactUsForm]
 *    summary: Get the list of the users inquiry left in contact form
 *    description:
 *      Will return all users inquiry.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/', (req, res, next) => {
  userEnquiryController
    .getUserEnquiry(req.user.uid)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
