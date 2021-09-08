const express = require('express');
const userController = require('../controller/user.controller');

const route = express.Router();

route
    .get('/', userController.getAllUsers)
    .post('/',userController.createUser)

module.exports = route;