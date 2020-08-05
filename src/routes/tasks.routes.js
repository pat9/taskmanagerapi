const { create, update, findByUser, destroy } = require('../controllers/tasks.controller');
const Router = require('express').Router();

Router.get('/user/:id', findByUser)
Router.post('/', create)
Router.put('/:id', update)
Router.delete('/:id', destroy)

module.exports = Router