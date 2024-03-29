const express = require('express');

const router = express.Router();

const exampleResources = require('./exampleResources.router');

const tools = require('./tools.router');
const favourites = require('./favourites.router');
const users = require('./users.router');
const categories = require('./categories.router');

const contactUsForm = require('./contactUsForm.router');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { authenticate } = require('../../firebase/auth');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0',
      title: 'Final project',
      description: 'API documentation for the final project',
      contact: {},
    },
    host: '',
    basePath: '/api',
  },
  securityDefinitions: {},
  apis: ['./api/routes/*.js'],
};

const swaggerDocument = swaggerJsDoc(swaggerOptions);

// Route for Swagger API Documentation
router.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.use('/exampleResources', exampleResources);

router.use('/tools', tools);
router.use('/favourites', authenticate, favourites);
router.use('/users', users);
router.use('/categories', categories);

router.use('/contactUsForm', contactUsForm);

module.exports = router;
