const routes = require('express').Router();
const name = require('../controllers');

routes.get('/', name.displayName);
routes.get('/hello', meme.displayHello);

module.exports = routes;