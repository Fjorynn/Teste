const express = require('express');
const { store } = require('./controllers/PostController');

const routes = new express.Router();


routes.post('/posts', store);

module.exports = routes;