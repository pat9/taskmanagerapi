const { create, update, findByUser } = require('../controllers/tasks.controller');
const Router = require('express').Router();

Router.get('/user/:id', findByUser)
Router.post('/', create)
Router.put('/:id', update)

module.exports = Router