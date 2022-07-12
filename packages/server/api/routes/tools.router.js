const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const toolsController = require('../controllers/tools.controller');

router.get('/', (req, res, next) => {
  toolsController
    .getTools(req.query)
    .then((result) => res.json(result))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  toolsController
    .getToolById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
