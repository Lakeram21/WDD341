const routes = require('express').Router();
const name = require('../controllers');

routes.get('/', name.getUser);
routes.get('/hello', name.displayHello);
routes.get('/user', name.getUser)

module.exports = routes;