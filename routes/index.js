const routes = require('express').Router();
const meme = require('../controllers');

routes.get('/', meme.displayMeme);
routes.get('/hello', meme.displayHello);

module.exports = routes;