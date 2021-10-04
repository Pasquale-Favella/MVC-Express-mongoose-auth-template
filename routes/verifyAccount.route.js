const express = require('express');
const verifyAccountController = require('../controller/verifyAccount.controller');
const route = express.Router();

route
    .get('/:slug', verifyAccountController.verifyAccount)
    

module.exports = route;